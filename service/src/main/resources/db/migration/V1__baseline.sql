CREATE SCHEMA IF NOT EXISTS heat;
ALTER SCHEMA heat OWNER TO postgres;

CREATE TABLE IF NOT EXISTS heat.tb_residence
(
    id                serial,
    zip_code          varchar(50) NOT NULL,
    number_residence  integer NOT NULL,
    latitude          float(8) NOT NULL,
    longitude         float(8) NOT NULL,
    number_residents  integer NOT NULL,

    CONSTRAINT pk_residence PRIMARY KEY (id)
);

ALTER TABLE heat.tb_residence OWNER TO postgres;

CREATE SEQUENCE IF NOT EXISTS heat.tb_residence_id_seq START 1;
SELECT setval('heat.tb_residence_id_seq', (SELECT max(id) FROM heat.tb_residence));