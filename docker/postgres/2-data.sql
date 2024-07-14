INSERT INTO public.admins (nom,email,telephone,login,"password",langue,"data",date_creation,date_modification,date_suppression) VALUES
	 ('Administrateur','pcs.agence.esgi@gmail.com','0676523774','admin','$argon2id$v=19$m=65536,t=3,p=4$SXIbMh1IrT4bKfRaO3kYHg$iUP5YYbBztjHHAH4ZE34B5VnQSYSz2e8X70vQlUDcjI','fr','{}','2024-05-16 02:12:04.796','2024-05-16 02:12:04.796',NULL);
INSERT INTO public.bailleurs (nom,email,login,"password",langue,"data",date_validation,date_suspension,date_creation,date_modification,date_suppression) VALUES
	 ('Adrien Bailleur1','pcs.bailleur1@gmail.com','bailleur1','$argon2id$v=19$m=65536,t=3,p=4$Rt5GA2gs2XuFgIs+T12yKg$BQGIpZWzqIQFCB2TZgNVaRQbb9qSityyYFxREtW7CCk','fr','{}',NULL,NULL,'2024-05-16 02:15:48.102','2024-05-16 02:15:48.102',NULL),
	 ('Phillipe Bailleur2','pcs.bailleur2@gmail.com','bailleur2','$argon2id$v=19$m=65536,t=3,p=4$cU5vKHqH7Kd8AxhP2gg+mg$x6PF7Fz1IaLeegdo9kTvAvMsHHtFzPAhpSEcOsKC/gs','fr','{}',NULL,NULL,'2024-05-16 02:15:48.11','2024-05-16 02:15:48.11',NULL);
INSERT INTO public.langues (langue,label,date_creation,date_modification,date_suppression) VALUES
	 ('fr','Français','2024-05-16 02:16:31.989','2024-05-16 02:16:31.989',NULL),
	 ('en','English','2024-05-16 02:16:31.996','2024-05-16 02:16:31.996',NULL);
INSERT INTO public.prestataires (nom,email,login,"password",langue,"data",date_validation,date_suspension,date_creation,date_modification,date_suppression) VALUES
	 ('Alain Prestataire1','pcs.prestataire1@gmail.com','prestataire1','$argon2id$v=19$m=65536,t=3,p=4$D84v2/kql3I54UqTE/gF6Q$fh9i391vtKmrP9wme+vWkIpciOd+t6vuvDRqCGLGcjo','fr','{}',NULL,NULL,'2024-05-16 02:18:30.873','2024-05-16 02:18:30.873',NULL),
	 ('Loic Prestataire2','pcs.prestataire2@gmail.com','prestataire2','$argon2id$v=19$m=65536,t=3,p=4$IdllFx0lGaO8XV4+XN1/LA$lnhqaI8EkA7kX/E3/o3IcxW5lq30mfv1sndSmjHuVUI','fr','{}',NULL,NULL,'2024-05-16 02:18:30.881','2024-05-16 02:18:30.881',NULL);
INSERT INTO public.voyageurs (nom,email,telephone,login,"password",langue,"data",date_validation,date_suspension,date_creation,date_modification,date_suppression) VALUES
	 ('Pierre Voyageur1','pcs.voyageur1@gmail.com','0643145245','voyageur1','$argon2id$v=19$m=65536,t=3,p=4$bEjs89VfnTwWKRccB1FIzA$tJ+OX5IyTxwBuLYTTYGodt1QPw1TUBasZ77qVphAo0g','fr','{}',NULL,NULL,'2024-05-16 02:20:52.817','2024-05-16 02:20:52.817',NULL),
	 ('Manuel Voyageur2','pcs.voyageur2@gmail.com','0765542543','voyageur2','$argon2id$v=19$m=65536,t=3,p=4$HYRLvK/aOxLXPXsiJ0JSqg$BRa9LNYwX/u926zUM08yKgR1Qvi7VMpoS3iQ2fEQlwI','fr','{}',NULL,NULL,'2024-05-16 02:20:52.822','2024-05-16 02:20:52.822',NULL);
INSERT INTO public.services (label, prix_standard, pcs_marge) VALUES
	 ('Remise des clés', 20, 10),
	 ('Taxieur', 100, 10),
	 ('Deplacement de bagages', 50, 12),
	 ('Cuisine a domicile', 80, 15),
	 ('Nettoyages', 40, 8),
	 ('Coach sportif', 150, 20);
INSERT INTO public.prestataire_service (id_prestataire,id_service,prix) VALUES
	 (1,1,30),
	 (1,3,50),
	 (1,4,100),
	 (1,5,70),
	 (1,6,150),
	 (2,1,30),
	 (2,2,100),
	 (2,3,60),
	 (2,4,80),
	 (2,5,80);
INSERT INTO public.biens (id_bailleur,type,surface,description,statut,prix,devise) VALUES
	 (1,'appartement','62m2','Appartement en plein Paris','disponible',150,'€'),
	 (1,'appartement','55m2','Appartement en Seine-et-Marne','disponible',90,'€'),
	 (1,'studio','32m2','Studio en plein Paris','disponible',80,'€'),
	 (1,'appartement','62m2','Appartement a Lyon','disponible',100,'€'),
	 (2,'appartement','80m2','Appartement a coté de Paris','disponible',120,'€'),
	 (2,'appartement','55m2','Appartement a la defense','disponible',110,'€'),
	 (2,'studio','27m2','Studio a Evry','disponible',60,'€');

INSERT INTO public.locations (id_bien,id_voyageur,prix,date_debut,date_fin,prix_total,devise) VALUES
	 (1,1,150,NOW(),NOW() + INTERVAL '3 days',450,'€'),
	 (7,1,60,NOW(),NOW() + INTERVAL '2 days',120,'€'),
	 (5,2,150,NOW(),NOW() + INTERVAL '10 days',1200,'€');

INSERT INTO public.prestations (id_voyageur,id_service,id_facture,id_prestataire,lieu_prestation,date_prestation,prix,devise) VALUES
	 (1,1,NULL,NULL,'55 rue de paris, 75005',NOW() + INTERVAL '3 days',0,'€'),
	 (1,2,NULL,NULL,'55 rue de paris, 75005',NOW() + INTERVAL '1 days',0,'€'),
	 (1,4,NULL,NULL,'55 rue de paris, 75005',NOW() + INTERVAL '2 days',0,'€'),
	 (2,3,NULL,NULL,'28 rue de lyon, 92111',NOW() + INTERVAL '1 days',0,'€'),
	 (2,5,NULL,NULL,'28 rue de lyon, 92111',NOW() + INTERVAL '3 days',0,'€');