INSERT INTO public.admin (name,email,tel,login,"password",locale,"data",created_at,updated_at,deleted_at) VALUES
	 ('Administrateur','pcs.agence.esgi@gmail.com','0676523774','admin','$argon2id$v=19$m=65536,t=3,p=4$SXIbMh1IrT4bKfRaO3kYHg$iUP5YYbBztjHHAH4ZE34B5VnQSYSz2e8X70vQlUDcjI','fr','{}','2024-05-16 02:12:04.796','2024-05-16 02:12:04.796',NULL);
INSERT INTO public.bailleur (name,email,login,"password",locale,"data",verified_at,suspended_at,created_at,updated_at,deleted_at) VALUES
	 ('Adrien Bailleur1','pcs.bailleur1@gmail.com','bailleur1','$argon2id$v=19$m=65536,t=3,p=4$Rt5GA2gs2XuFgIs+T12yKg$BQGIpZWzqIQFCB2TZgNVaRQbb9qSityyYFxREtW7CCk','fr','{}',NULL,NULL,'2024-05-16 02:15:48.102','2024-05-16 02:15:48.102',NULL),
	 ('Phillipe Bailleur2','pcs.bailleur2@gmail.com','bailleur2','$argon2id$v=19$m=65536,t=3,p=4$cU5vKHqH7Kd8AxhP2gg+mg$x6PF7Fz1IaLeegdo9kTvAvMsHHtFzPAhpSEcOsKC/gs','fr','{}',NULL,NULL,'2024-05-16 02:15:48.11','2024-05-16 02:15:48.11',NULL);
INSERT INTO public.langue (locale,label,created_at,updated_at,deleted_at) VALUES
	 ('fr','Français','2024-05-16 02:16:31.989','2024-05-16 02:16:31.989',NULL),
	 ('en','English','2024-05-16 02:16:31.996','2024-05-16 02:16:31.996',NULL);
INSERT INTO public.prestataire (name,email,login,"password",locale,"data",verified_at,suspended_at,created_at,updated_at,deleted_at) VALUES
	 ('Alain Prestataire1','pcs.prestataire1@gmail.com','prestataire1','$argon2id$v=19$m=65536,t=3,p=4$D84v2/kql3I54UqTE/gF6Q$fh9i391vtKmrP9wme+vWkIpciOd+t6vuvDRqCGLGcjo','fr','{}',NULL,NULL,'2024-05-16 02:18:30.873','2024-05-16 02:18:30.873',NULL),
	 ('Loic Prestataire2','pcs.prestataire2@gmail.com','prestataire2','$argon2id$v=19$m=65536,t=3,p=4$IdllFx0lGaO8XV4+XN1/LA$lnhqaI8EkA7kX/E3/o3IcxW5lq30mfv1sndSmjHuVUI','fr','{}',NULL,NULL,'2024-05-16 02:18:30.881','2024-05-16 02:18:30.881',NULL);
INSERT INTO public.voyageur (name,email,tel,login,"password",locale,"data",verified_at,suspended_at,created_at,updated_at,deleted_at) VALUES
	 ('Pierre Voyageur1','pcs.voyageur1@gmail.com','0643145245','voyageur1','$argon2id$v=19$m=65536,t=3,p=4$bEjs89VfnTwWKRccB1FIzA$tJ+OX5IyTxwBuLYTTYGodt1QPw1TUBasZ77qVphAo0g','fr','{}',NULL,NULL,'2024-05-16 02:20:52.817','2024-05-16 02:20:52.817',NULL),
	 ('Manuel Voyageur2','pcs.voyageur2@gmail.com','0765542543','voyageur2','$argon2id$v=19$m=65536,t=3,p=4$HYRLvK/aOxLXPXsiJ0JSqg$BRa9LNYwX/u926zUM08yKgR1Qvi7VMpoS3iQ2fEQlwI','fr','{}',NULL,NULL,'2024-05-16 02:20:52.822','2024-05-16 02:20:52.822',NULL);
