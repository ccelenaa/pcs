DROP SCHEMA public CASCADE;
CREATE SCHEMA public;


--
-- TOC entry 231 (class 1259 OID 18887)
-- Name: admins; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.admins (
    id BIGSERIAL,
    nom character varying(128),
    email character varying(128) NOT NULL,
    telephone character varying(32) NOT NULL,
    login character varying(32) NOT NULL,
    password character varying(512) NOT NULL,
    langue character varying(32) DEFAULT 'fr'::character varying NOT NULL,
    data jsonb DEFAULT '{}'::jsonb NOT NULL,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 215 (class 1259 OID 18785)
-- Name: bailleurs; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.bailleurs (
    id BIGSERIAL,
    nom character varying(128),
    email character varying(128) NOT NULL,
    telephone character varying(32) NOT NULL,
    login character varying(32) NOT NULL,
    password character varying(512) NOT NULL,
    langue character varying(32) DEFAULT 'fr'::character varying NOT NULL,
    data jsonb DEFAULT '{}'::jsonb NOT NULL,
    date_validation timestamp(3) without time zone,
    date_suspension timestamp(3) without time zone,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "bailleurs_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 217 (class 1259 OID 18798)
-- Name: biens; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.biens (
    id BIGSERIAL,
    id_bailleur bigint NOT NULL,
    type character varying(64) NOT NULL,
    surface character varying(255) NOT NULL,
    titre character varying(1024) NOT NULL,
    description character varying(1024) NOT NULL,
    adresse character varying(256) NOT NULL,
    contact character varying(256),
    statut character varying(64) NOT NULL,
    prix real DEFAULT 0 NOT NULL,
    pcs_marge real DEFAULT 0 NOT NULL,
    prix_client real DEFAULT 0 NOT NULL,
    devise character varying(32) DEFAULT 'eu'::character varying NOT NULL,
    data jsonb DEFAULT '{}'::jsonb NOT NULL,
    date_suspension_bailleur timestamp(3) without time zone,
    date_validation timestamp(3) without time zone,
    date_suspension timestamp(3) without time zone,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "biens_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 233 (class 1259 OID 18900)
-- Name: factures; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.facturations (
    id BIGSERIAL,
    type character varying(32) DEFAULT 'prestation'::character varying NOT NULL,
    data jsonb DEFAULT '{}'::jsonb NOT NULL,
    date_debut timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_fin timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "facturations_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 233 (class 1259 OID 18900)
-- Name: factures; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.factures (
    id BIGSERIAL,
    id_facturation bigint DEFAULT NULL,
    id_prestataire bigint DEFAULT NULL,
    id_bailleur bigint DEFAULT NULL,
    id_voyageur bigint DEFAULT NULL,
    type character varying(32) DEFAULT 'location'::character varying NOT NULL,
    prix real DEFAULT 0 NOT NULL,
    total real DEFAULT 0 NOT NULL,
    data jsonb DEFAULT '{}'::jsonb NOT NULL,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "factures_pkey" PRIMARY KEY ("id")
);

--
-- TOC entry 219 (class 1259 OID 18811)
-- Name: langues; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.langues (
    id BIGSERIAL,
    langue character varying(32) DEFAULT 'fr'::character varying NOT NULL,
    label character varying(32) DEFAULT 'Français'::character varying NOT NULL,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "langues_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 221 (class 1259 OID 18822)
-- Name: locations; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.locations (
    id BIGSERIAL,
    id_bien bigint NOT NULL,
    id_voyageur bigint NOT NULL,
    id_facture bigint,
    prix real DEFAULT 0 NOT NULL,
    prix_total real DEFAULT 0 NOT NULL,
    pcs_marge real DEFAULT 0 NOT NULL,
    prix_client real DEFAULT 0 NOT NULL,
    devise character varying(32) DEFAULT 'eu'::character varying NOT NULL,
    statut integer DEFAULT 0 NOT NULL,
    data jsonb DEFAULT '{}'::jsonb NOT NULL,
    date_debut timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_fin timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 223 (class 1259 OID 18837)
-- Name: photos; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.tarifs (
    id BIGSERIAL,
    key character varying(128) NOT NULL,
    value real DEFAULT 10,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "tarifs_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 223 (class 1259 OID 18837)
-- Name: photos; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.photos (
    id BIGSERIAL,
    id_model bigint NOT NULL,
    model character varying(128) NOT NULL,
    url character varying(1024) NOT NULL,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "photos_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 225 (class 1259 OID 18846)
-- Name: planing; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.planing (
    id BIGSERIAL,
    id_bien bigint NOT NULL,
    data jsonb DEFAULT '{}'::jsonb NOT NULL,
    statut character varying(32),
    date_debut timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_fin timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "planing_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 227 (class 1259 OID 18860)
-- Name: prestataires; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.prestataires (
    id BIGSERIAL,
    nom character varying(128),
    email character varying(128) NOT NULL,
    telephone character varying(32) NOT NULL,
    login character varying(32) NOT NULL,
    password character varying(512) NOT NULL,
    langue character varying(32) DEFAULT 'fr'::character varying NOT NULL,
    data jsonb DEFAULT '{}'::jsonb NOT NULL,
    date_validation timestamp(3) without time zone,
    date_suspension timestamp(3) without time zone,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "prestataires_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 239 (class 1259 OID 18938)
-- Name: services; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.messages (
    id BIGSERIAL,
    id_prestation bigint NOT NULL,
    id_voyageur bigint DEFAULT NULL,
    id_prestataire bigint DEFAULT NULL,
    id_admin bigint DEFAULT NULL,
    message character varying(1024),
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 239 (class 1259 OID 18938)
-- Name: services; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.services (
    id BIGSERIAL,
    id_voyageur bigint NOT NULL,
    label character varying(1024),
    description character varying(2048),
    adresse character varying(256),
    contact character varying(256),
    prix_min real DEFAULT NULL,
    prix_max real DEFAULT NULL,
    statut integer DEFAULT 0 NOT NULL,
    remarque character varying(512),
    data jsonb DEFAULT '{}'::jsonb NOT NULL,

    date timestamp(3) without time zone NOT NULL,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_realisation timestamp(3) without time zone,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_admin_suppression timestamp(3) without time zone,
    date_voyageur_suppression timestamp(3) without time zone,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 237 (class 1259 OID 18923)
-- Name: prestations; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.prestations (
    id BIGSERIAL,
    id_service bigint NOT NULL,
    id_prestataire bigint NOT NULL,
    id_facture bigint DEFAULT NULL,
    prix_prestataire real DEFAULT 0 NOT NULL,
    pcs_marge real DEFAULT 0 NOT NULL,
    prix_supplementaire real DEFAULT 0 NOT NULL,
    date_prestation timestamp(3) without time zone,
    date_validation_voyageur timestamp(3) without time zone,
    date_validation_prestataire timestamp(3) without time zone,
    note integer DEFAULT 0 NOT NULL,
    remarque character varying(512),
    statut integer DEFAULT 0 NOT NULL,
    data jsonb DEFAULT '{}'::jsonb NOT NULL,

    date_suppression_admin timestamp(3) without time zone,
    date_suppression_voyageur timestamp(3) without time zone,
    date_suppression_prestataire timestamp(3) without time zone,

    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,

    CONSTRAINT "prestations_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 239 (class 1259 OID 18938)
-- Name: services; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.transactions (
    id BIGSERIAL,
    id_location bigint DEFAULT NULL,
    id_prestation bigint DEFAULT NULL,
    session_id character varying(1024) UNIQUE,
    session_status character varying(32),
    payment_intent character varying(1024) DEFAULT NULL,
    payment_status character varying(32),
    amount integer DEFAULT 0 NOT NULL,
    url character varying(4096),
    data jsonb DEFAULT '{}'::jsonb NOT NULL,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_expiration timestamp(3) without time zone,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 229 (class 1259 OID 18873)
-- Name: voyageurs; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.voyageurs (
    id BIGSERIAL,
    nom character varying(128),
    email character varying(128) NOT NULL,
    telephone character varying(32) NOT NULL,
    login character varying(32) NOT NULL,
    password character varying(512) NOT NULL,
    langue character varying(32) DEFAULT 'fr'::character varying NOT NULL,
    data jsonb DEFAULT '{}'::jsonb NOT NULL,
    date_suspension timestamp(3) without time zone,
    date_validation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "voyageurs_pkey" PRIMARY KEY ("id")
);



ALTER TABLE ONLY public.biens
    ADD CONSTRAINT bien_bailleur_id_fkey FOREIGN KEY (id_bailleur) REFERENCES public.bailleurs(id) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transaction_location_id_fkey FOREIGN KEY (id_location) REFERENCES public.locations(id) ON UPDATE CASCADE ON DELETE CASCADE,
    ADD CONSTRAINT transaction_prestation_id_fkey FOREIGN KEY (id_prestation) REFERENCES public.prestations(id) ON UPDATE CASCADE ON DELETE CASCADE;


ALTER TABLE ONLY public.locations
    ADD CONSTRAINT location_bien_id_fkey FOREIGN KEY (id_bien) REFERENCES public.biens(id) ON UPDATE CASCADE ON DELETE RESTRICT,
    ADD CONSTRAINT location_facture_id_fkey FOREIGN KEY (id_facture) REFERENCES public.factures(id) ON UPDATE CASCADE ON DELETE RESTRICT,
    ADD CONSTRAINT location_voyageur_id_fkey FOREIGN KEY (id_voyageur) REFERENCES public.voyageurs(id) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE ONLY public.messages
    ADD CONSTRAINT message_prestation_id_fkey FOREIGN KEY (id_prestation) REFERENCES public.prestations(id) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE ONLY public.planing
    ADD CONSTRAINT planing_bien_id_fkey FOREIGN KEY (id_bien) REFERENCES public.biens(id) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_voyageur_id_fkey FOREIGN KEY (id_voyageur) REFERENCES public.voyageurs(id) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE ONLY public.factures
    ADD CONSTRAINT facture_facturation_id_fkey FOREIGN KEY (id_facturation) REFERENCES public.facturations(id) ON UPDATE CASCADE ON DELETE RESTRICT,
    ADD CONSTRAINT facture_prestataire_id_fkey FOREIGN KEY (id_prestataire) REFERENCES public.prestataires(id) ON UPDATE CASCADE ON DELETE RESTRICT,
    ADD CONSTRAINT facture_voyageur_id_fkey FOREIGN KEY (id_voyageur) REFERENCES public.voyageurs(id) ON UPDATE CASCADE ON DELETE RESTRICT,
    ADD CONSTRAINT facture_bailleur_id_fkey FOREIGN KEY (id_bailleur) REFERENCES public.bailleurs(id) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE ONLY public.prestations
    ADD CONSTRAINT prestation_facture_id_fkey FOREIGN KEY (id_facture) REFERENCES public.factures(id) ON DELETE CASCADE,
    ADD CONSTRAINT prestation_service_id_fkey FOREIGN KEY (id_service) REFERENCES public.services(id) ON UPDATE CASCADE ON DELETE RESTRICT,
    ADD CONSTRAINT prestation_prestataire_id_fkey FOREIGN KEY (id_prestataire) REFERENCES public.prestataires(id) ON UPDATE CASCADE ON DELETE RESTRICT;


REVOKE USAGE ON SCHEMA public FROM PUBLIC;





INSERT INTO public.admins (nom,email,telephone,login,"password",langue,"data",date_creation,date_modification,date_suppression) VALUES
	 ('Administrateur','pcs.agence.esgi@gmail.com','0611111111','admin','$argon2id$v=19$m=65536,t=3,p=4$SXIbMh1IrT4bKfRaO3kYHg$iUP5YYbBztjHHAH4ZE34B5VnQSYSz2e8X70vQlUDcjI','fr','{}','2024-05-16 02:12:04.796','2024-05-16 02:12:04.796',NULL);
INSERT INTO public.bailleurs (nom,email,telephone,login,"password",langue,"data",date_validation,date_suspension,date_creation,date_modification,date_suppression) VALUES
	 ('Adrien Bailleur1','pcs.bailleur1@gmail.com','0666666666','bailleur1','$argon2id$v=19$m=65536,t=3,p=4$Rt5GA2gs2XuFgIs+T12yKg$BQGIpZWzqIQFCB2TZgNVaRQbb9qSityyYFxREtW7CCk','fr','{}',NULL,NULL,'2024-05-16 02:15:48.102','2024-05-16 02:15:48.102',NULL),
	 ('Phillipe Bailleur2','pcs.bailleur2@gmail.com','0777777777','bailleur2','$argon2id$v=19$m=65536,t=3,p=4$cU5vKHqH7Kd8AxhP2gg+mg$x6PF7Fz1IaLeegdo9kTvAvMsHHtFzPAhpSEcOsKC/gs','fr','{}',NULL,NULL,'2024-05-16 02:15:48.11','2024-05-16 02:15:48.11',NULL);
INSERT INTO public.langues (langue,label,date_creation,date_modification,date_suppression) VALUES
	 ('fr','Français','2024-05-16 02:16:31.989','2024-05-16 02:16:31.989',NULL),
	 ('en','English','2024-05-16 02:16:31.996','2024-05-16 02:16:31.996',NULL);
INSERT INTO public.prestataires (nom,email,telephone,login,"password",langue,"data",date_validation,date_suspension,date_creation,date_modification,date_suppression) VALUES
	 ('Alain Prestataire1','pcs.prestataire1@gmail.com','0555555555','prestataire1','$argon2id$v=19$m=65536,t=3,p=4$D84v2/kql3I54UqTE/gF6Q$fh9i391vtKmrP9wme+vWkIpciOd+t6vuvDRqCGLGcjo','fr','{}',NULL,NULL,'2024-05-16 02:18:30.873','2024-05-16 02:18:30.873',NULL),
	 ('Loic Prestataire2','pcs.prestataire2@gmail.com','0644444444','prestataire2','$argon2id$v=19$m=65536,t=3,p=4$IdllFx0lGaO8XV4+XN1/LA$lnhqaI8EkA7kX/E3/o3IcxW5lq30mfv1sndSmjHuVUI','fr','{}',NULL,NULL,'2024-05-16 02:18:30.881','2024-05-16 02:18:30.881',NULL);
INSERT INTO public.voyageurs (nom,email,telephone,login,"password",langue,"data",date_validation,date_suspension,date_creation,date_modification,date_suppression) VALUES
	 ('Pierre Voyageur1','pcs.voyageur1@gmail.com','0633333333','voyageur1','$argon2id$v=19$m=65536,t=3,p=4$bEjs89VfnTwWKRccB1FIzA$tJ+OX5IyTxwBuLYTTYGodt1QPw1TUBasZ77qVphAo0g','fr','{}',NULL,NULL,'2024-05-16 02:20:52.817','2024-05-16 02:20:52.817',NULL),
	 ('Manuel Voyageur2','pcs.voyageur2@gmail.com','0622222222','voyageur2','$argon2id$v=19$m=65536,t=3,p=4$HYRLvK/aOxLXPXsiJ0JSqg$BRa9LNYwX/u926zUM08yKgR1Qvi7VMpoS3iQ2fEQlwI','fr','{}',NULL,NULL,'2024-05-16 02:20:52.822','2024-05-16 02:20:52.822',NULL);
INSERT INTO public.services (id_voyageur, label, adresse, prix_max, date, statut) VALUES
	 (1,'Remise des clés', '36 Rue Charles 75001', 150, now() + INTERVAL '1 DAYS', 0),
	 (1,'Taxieur', '128 Rue Michel 64011', 100, now() + INTERVAL '2 DAYS', 0),
	 (1,'Deplacement de bagages', '36 Rue Charles 75001', 80, now() + INTERVAL '1 DAYS', 0),
	 (1,'Reparation', '36 Rue Charles 75001', 200, now() + INTERVAL '6 DAYS', 0),
	 (2,'Cuisine a domicile', '89 Rue Emil Zola 92006', 70, now() + INTERVAL '1 DAYS', 0),
	 (2,'Nettoyages', '89 Rue Emil Zola 92006', 110, now() + INTERVAL '2 DAYS', 0),
	 (2,'Coach sportif', '89 Rue Emil Zola 92006', 150, now() + INTERVAL' 5 DAYS', 0);
INSERT INTO public.biens (id_bailleur,type,surface,titre,description,adresse,statut,prix,devise) VALUES
	 (1,'appartement','62m2','Appartement en plein Paris','Description ppartement en plein Paris', '36 Rue Charles 75001','disponible',150,'€'),
	 (1,'appartement','55m2','Appartement en Seine-et-Marne','Description Appartement en Seine-et-Marne', '128 Rue Michel 64011','disponible',90,'€'),
	 (1,'studio','32m2','Studio en plein Paris','Description Studio en plein Paris', '36 Rue Charles 75001','disponible',80,'€'),
	 (1,'appartement','62m2','Appartement a Lyon','Description Appartement a Lyon', '89 Rue Emil Zola 92006','disponible',100,'€'),
	 (2,'appartement','80m2','Appartement a coté de Paris','Description Appartement a coté de Paris', '89 Rue Emil Zola 92006','disponible',120,'€'),
	 (2,'appartement','55m2','Appartement a la defense','Description Appartement a la defense', '89 Rue Emil Zola 92006','disponible',110,'€'),
	 (2,'studio','27m2','Studio a Evry','Description Studio a Evry', '89 Rue Emil Zola 92006','disponible',60,'€');

INSERT INTO public.locations (id_bien,id_voyageur,prix,date_debut,date_fin,prix_total,devise) VALUES
	 (1,1,150,NOW(),NOW() + INTERVAL '3 days',450,'€'),
	 (7,1,60,NOW(),NOW() + INTERVAL '2 days',120,'€'),
	 (5,2,150,NOW(),NOW() + INTERVAL '10 days',1200,'€');

-- INSERT INTO public.prestations (id_service,id_prestataire,prix_prestataire,pcs_marge,date_prestation,statut) VALUES
-- 	 (1,1, 120, 10, NOW() + INTERVAL '1 days', 0),
-- 	 (2,2, 80, 10, NOW() + INTERVAL '2 days', 0),
-- 	 (5,1, 50, 10, NOW() + INTERVAL '2 days', 0);
