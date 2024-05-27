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
    description character varying(255) NOT NULL,
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

CREATE TABLE public.factures (
    id BIGSERIAL,
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

CREATE TABLE public.photos (
    id BIGSERIAL,
    id_bien bigint NOT NULL,
    url character varying(32) NOT NULL,
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
-- TOC entry 235 (class 1259 OID 18912)
-- Name: prestataire_service; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.prestataire_service (
    id BIGSERIAL,
    id_prestataire bigint NOT NULL,
    id_service bigint NOT NULL,
    prix real DEFAULT 0 NOT NULL,
    pcs_marge real DEFAULT 0 NOT NULL,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "prestataire_service_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 227 (class 1259 OID 18860)
-- Name: prestataires; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.prestataires (
    id BIGSERIAL,
    nom character varying(128),
    email character varying(128) NOT NULL,
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
-- TOC entry 237 (class 1259 OID 18923)
-- Name: prestations; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.prestations (
    id BIGSERIAL,
    id_voyageur bigint NOT NULL,
    id_prestataire bigint,
    id_service bigint NOT NULL,
    id_facture bigint,
    prix real DEFAULT 0 NOT NULL,
    pcs_marge real DEFAULT 0 NOT NULL,
    prix_client real DEFAULT 0 NOT NULL,
    prix_supplementaire real DEFAULT 0 NOT NULL,
    devise character varying(32) DEFAULT 'eu'::character varying NOT NULL,
    lieu_prestation character varying(512),
    date_prestation timestamp(3) without time zone,
    date_validation_voyageur timestamp(3) without time zone,
    date_validation_prestataire timestamp(3) without time zone,
    statut character varying(32) DEFAULT 'new'::character varying NOT NULL,
    remarque character varying(512),
    note integer DEFAULT 0 NOT NULL,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "prestations_pkey" PRIMARY KEY ("id")
);


--
-- TOC entry 239 (class 1259 OID 18938)
-- Name: services; Type: TABLE; Schema: public; Owner: pcs
--

CREATE TABLE public.services (
    id BIGSERIAL,
    label character varying(255),
    prix_standard real DEFAULT 0 NOT NULL,
    pcs_marge real DEFAULT 0 NOT NULL,
    date_creation timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_modification timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_suppression timestamp(3) without time zone,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
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


ALTER TABLE ONLY public.locations
    ADD CONSTRAINT location_bien_id_fkey FOREIGN KEY (id_bien) REFERENCES public.biens(id) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE ONLY public.locations
    ADD CONSTRAINT location_facture_id_fkey FOREIGN KEY (id_facture) REFERENCES public.factures(id) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE ONLY public.locations
    ADD CONSTRAINT location_voyageur_id_fkey FOREIGN KEY (id_voyageur) REFERENCES public.voyageurs(id) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photo_bien_id_fkey FOREIGN KEY (id_bien) REFERENCES public.biens(id) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE ONLY public.planing
    ADD CONSTRAINT planing_bien_id_fkey FOREIGN KEY (id_bien) REFERENCES public.biens(id) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE ONLY public.prestataire_service
    ADD CONSTRAINT prestataire_service_prestataire_id_fkey FOREIGN KEY (id_prestataire) REFERENCES public.prestataires(id) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE ONLY public.prestataire_service
    ADD CONSTRAINT prestataire_service_service_id_fkey FOREIGN KEY (id_service) REFERENCES public.services(id) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE ONLY public.prestations
    ADD CONSTRAINT prestation_facture_id_fkey FOREIGN KEY (id_facture) REFERENCES public.factures(id) ON DELETE CASCADE;


ALTER TABLE ONLY public.prestations
    ADD CONSTRAINT prestation_prestataire_id_fkey FOREIGN KEY (id_prestataire) REFERENCES public.prestataires(id) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE ONLY public.prestations
    ADD CONSTRAINT prestation_service_id_fkey FOREIGN KEY (id_service) REFERENCES public.services(id) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE ONLY public.prestations
    ADD CONSTRAINT prestation_voyageur_id_fkey FOREIGN KEY (id_voyageur) REFERENCES public.voyageurs(id) ON UPDATE CASCADE ON DELETE RESTRICT;


REVOKE USAGE ON SCHEMA public FROM PUBLIC;


