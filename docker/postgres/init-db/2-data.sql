INSERT INTO public.administrateur (name,email,tel,login,"password",locale,"data",created_at,updated_at,deleted_at) VALUES
	 ('Administrateur','pcs.agence.esgi@gmail.com','0676523774','admin','admin','fr-FR','{}','2024-05-16 02:12:04.796','2024-05-16 02:12:04.796',NULL);
INSERT INTO public.bailleur (name,email,login,"password",locale,"data",verified_at,suspended_at,created_at,updated_at,deleted_at) VALUES
	 ('Adrien Bailleur1','pcs.bailleur1@gmail.com','bailleur1','bailleur1','fr-FR','{}',NULL,NULL,'2024-05-16 02:15:48.102','2024-05-16 02:15:48.102',NULL),
	 ('Phillipe Bailleur2','pcs.bailleur2@gmail.com','bailleur2','bailleur2','fr-FR','{}',NULL,NULL,'2024-05-16 02:15:48.11','2024-05-16 02:15:48.11',NULL);
INSERT INTO public.langue (locale,created_at,updated_at,deleted_at) VALUES
	 ('fr-FR','2024-05-16 02:16:31.989','2024-05-16 02:16:31.989',NULL),
	 ('en-US','2024-05-16 02:16:31.996','2024-05-16 02:16:31.996',NULL);
INSERT INTO public.prestataire (name,email,login,"password",locale,"data",verified_at,suspended_at,created_at,updated_at,deleted_at) VALUES
	 ('Alain Prestataire1','pcs.prestataire1@gmail.com','prestataire1','prestataire1','fr-FR','{}',NULL,NULL,'2024-05-16 02:18:30.873','2024-05-16 02:18:30.873',NULL),
	 ('Loic Prestataire2','pcs.prestataire2@gmail.com','prestataire2','pretstaire2','fr-FR','{}',NULL,NULL,'2024-05-16 02:18:30.881','2024-05-16 02:18:30.881',NULL);
INSERT INTO public.voyageur (name,email,tel,login,"password",locale,"data",verified_at,suspended_at,created_at,updated_at,deleted_at) VALUES
	 ('Pierre Voyageur1','pcs.voyageur1@gmail.com','0643145245','voyageur1','voyageur1','fr-FR','{}',NULL,NULL,'2024-05-16 02:20:52.817','2024-05-16 02:20:52.817',NULL),
	 ('Manuel Voyageur2','pcs.voyageur2@gmail.com','0765542543','voyageur2','voyageur2','fr-FR','{}',NULL,NULL,'2024-05-16 02:20:52.822','2024-05-16 02:20:52.822',NULL);
