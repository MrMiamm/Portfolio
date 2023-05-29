DROP SCHEMA IF EXISTS transmusicales cascade;
CREATE SCHEMA transmusicales;
SET SCHEMA 'transmusicales';

CREATE TABLE IF NOT EXISTS _groupe_artiste (
  id_groupe_artiste  VARCHAR(5) NOT NULL,
  nom_groupe_artiste  VARCHAR(30) NOT NULL,
  site_web VARCHAR(50) NOT NULL,
  debut INTEGER NOT NULL,
  sortie_discographique INTEGER NOT NULL,
  a_pour_origine VARCHAR(30) NOT NULL,
  a_pour VARCHAR(100) NOT NULL,
  type_ponctuel VARCHAR(20) NOT NULL,
  type_principal VARCHAR(20) NOT NULL,
  CONSTRAINT _groupe_artiste_pk PRIMARY KEY(id_groupe_artiste)
);

CREATE TABLE IF NOT EXISTS _annee (
  an INT NOT NULL,
  CONSTRAINT _annee_pk PRIMARY KEY(an)
);

CREATE TABLE IF NOT EXISTS _pays (
  nom_p VARCHAR(30) NOT NULL,
  CONSTRAINT _pays_pk PRIMARY KEY(nom_p)
);

CREATE TABLE IF NOT EXISTS _ville (
  nom_v VARCHAR(30) NOT NULL,
  se_situe VARCHAR(30) NOT NULL,
  CONSTRAINT _ville_pk PRIMARY KEY(nom_v)
);

CREATE TABLE IF NOT EXISTS _edition (
  nom_edition VARCHAR(30) NOT NULL,
  annee_edition INTEGER NOT NULL,
  CONSTRAINT _edition_pk PRIMARY KEY(nom_edition)
);

CREATE TABLE IF NOT EXISTS _formation (
  libelle_formation VARCHAR(100) NOT NULL,
  a_pour VARCHAR(5) NOT NULL,
  CONSTRAINT _formation_pk PRIMARY KEY(libelle_formation)
);

CREATE TABLE IF NOT EXISTS _representation (
  numero_representation VARCHAR(5) NOT NULL,
  heure VARCHAR(5) NOT NULL,
  date_representation DATE NOT NULL,
  a_lieu_dans VARCHAR(30) NOT NULL,
  jouee_par VARCHAR(5) NOT NULL,
  CONSTRAINT _representation_ck_numero_representation CHECK (numero_representation LIKE '[0-9][0-9][0-9][0-9][0-9]'),
  CONSTRAINT _representation_pk PRIMARY KEY(numero_representation)
);

CREATE TABLE IF NOT EXISTS _lieu (
  id_lieu VARCHAR(5) NOT NULL,
  nom_lieu VARCHAR(30) NOT NULL,
  accesPMR INTEGER NOT NULL,
  capacite_max INTEGER NOT NULL,
  type_lieu VARCHAR(15),
  dans VARCHAR(30) NOT NULL,
  CONSTRAINT _lieu_ck CHECK (accesPMR IN (1,0)),
  CONSTRAINT _lieu_pk PRIMARY KEY(id_lieu)
);

CREATE TABLE IF NOT EXISTS _concert (
  no_concert VARCHAR(30) NOT NULL,
  titre VARCHAR(40) NOT NULL,
  resume VARCHAR(100) NOT NULL,
  duree INTEGER NOT NULL,
  tarif FLOAT NOT NULL,
  se_deroule VARCHAR(30) NOT NULL,
  correspond_a VARCHAR(5) NOT NULL,
  CONSTRAINT _concert_pk PRIMARY KEY(no_concert)
);

CREATE TABLE IF NOT EXISTS _type_musique (
  type_m VARCHAR(20) NOT NULL,
  type_principal VARCHAR(5) NOT NULL,
  type_ponctuel VARCHAR(5) NOT NULL,
  est_de VARCHAR(30) NOT NULL,
  CONSTRAINT _type_musique_pk PRIMARY KEY(type_m)
);
  
ALTER TABLE _groupe_artiste
  ADD CONSTRAINT _groupe_artiste_fk_debut
  FOREIGN KEY(debut) REFERENCES _annee(an),
  ADD CONSTRAINT _groupe_artiste_fk_a_pour
  FOREIGN KEY(a_pour) REFERENCES _formation(libelle_formation),
  ADD CONSTRAINT _groupe_artiste_fk_sortie_discographique
  FOREIGN KEY(sortie_discographique) REFERENCES _annee(an),
  ADD CONSTRAINT _groupe_artiste_fk_a_pour_origine
  FOREIGN KEY(a_pour_origine) REFERENCES _pays(nom_p);

ALTER TABLE _edition
  ADD CONSTRAINT _edition_fk_annee_edition
  FOREIGN KEY(annee_edition) REFERENCES _annee(an);

ALTER TABLE _ville
  ADD CONSTRAINT _ville_fk_se_situe
  FOREIGN KEY(se_situe) REFERENCES _pays(nom_p);

ALTER TABLE _lieu
  ADD CONSTRAINT _lieu_fk_dans
  FOREIGN KEY(dans) REFERENCES _ville(nom_v);

ALTER TABLE _representation
  ADD CONSTRAINT _representation_fk_a_lieu_dans
  FOREIGN KEY(a_lieu_dans) REFERENCES _lieu(id_lieu),
  ADD CONSTRAINT _representation_fk_jouee_par
  FOREIGN KEY(jouee_par) REFERENCES _groupe_artiste(id_groupe_artiste);

ALTER TABLE _formation
  ADD CONSTRAINT _formation_fk_a_pour
  FOREIGN KEY(a_pour) REFERENCES _groupe_artiste(id_groupe_artiste);

ALTER TABLE _concert
  ADD CONSTRAINT _concert_fk_se_deroule
  FOREIGN KEY(se_deroule) REFERENCES _edition(nom_edition),
  ADD CONSTRAINT _concert_fk_correspond_a
  FOREIGN KEY(correspond_a) REFERENCES _representation(numero_representation);

ALTER TABLE _type_musique
  ADD CONSTRAINT _type_musique_fk_est_de
  FOREIGN KEY(est_de) REFERENCES _concert(no_concert),
  ADD CONSTRAINT _type_musique_fk_type_principal
  FOREIGN KEY(type_principal) REFERENCES _groupe_artiste(id_groupe_artiste),
  ADD CONSTRAINT _type_musique_fk_type_ponctuel
  FOREIGN KEY(type_ponctuel) REFERENCES _groupe_artiste(id_groupe_artiste),
  ADD CONSTRAINT _groupe_artiste_fk_type_principal
  FOREIGN KEY(type_principal) REFERENCES _type_musique(type_m),
  ADD CONSTRAINT _groupe_artiste_fk_type_ponctuel
  FOREIGN KEY(type_ponctuel) REFERENCES _type_musique(type_m);


