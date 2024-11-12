CREATE DATABASE  IF NOT EXISTS `cvdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cvdb`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: cvdb
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_assign_exam`
--

DROP TABLE IF EXISTS `tbl_assign_exam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_assign_exam` (
  `assign_ex_id` int NOT NULL,
  `examName_id` int NOT NULL,
  `examType_id` int NOT NULL,
  `uploadExam` varchar(100) NOT NULL,
  `descreption` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`assign_ex_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_assign_exam`
--

LOCK TABLES `tbl_assign_exam` WRITE;
/*!40000 ALTER TABLE `tbl_assign_exam` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_assign_exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_board`
--

DROP TABLE IF EXISTS `tbl_board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_board` (
  `board_id` int NOT NULL,
  `boardName` varchar(200) NOT NULL,
  PRIMARY KEY (`board_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_board`
--

LOCK TABLES `tbl_board` WRITE;
/*!40000 ALTER TABLE `tbl_board` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_complete_exam`
--

DROP TABLE IF EXISTS `tbl_complete_exam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_complete_exam` (
  `com_ex_id` int NOT NULL,
  `std_id` int NOT NULL,
  `examName_id` int NOT NULL,
  `UploadFile` varchar(200) NOT NULL,
  PRIMARY KEY (`com_ex_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_complete_exam`
--

LOCK TABLES `tbl_complete_exam` WRITE;
/*!40000 ALTER TABLE `tbl_complete_exam` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_complete_exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_counselor_notice`
--

DROP TABLE IF EXISTS `tbl_counselor_notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_counselor_notice` (
  `notice_id` int NOT NULL,
  `counselor_id` int NOT NULL,
  `std_id` int NOT NULL,
  `slotTime_id` int NOT NULL,
  `meeting` varchar(200) NOT NULL,
  PRIMARY KEY (`notice_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_counselor_notice`
--

LOCK TABLES `tbl_counselor_notice` WRITE;
/*!40000 ALTER TABLE `tbl_counselor_notice` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_counselor_notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_exam`
--

DROP TABLE IF EXISTS `tbl_exam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_exam` (
  `exam_id` int NOT NULL,
  `examName` varchar(200) NOT NULL,
  `descreption` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`exam_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_exam`
--

LOCK TABLES `tbl_exam` WRITE;
/*!40000 ALTER TABLE `tbl_exam` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_examtype`
--

DROP TABLE IF EXISTS `tbl_examtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_examtype` (
  `ex_type_id` int NOT NULL,
  `examType` varchar(100) NOT NULL,
  `descreption` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`ex_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_examtype`
--

LOCK TABLES `tbl_examtype` WRITE;
/*!40000 ALTER TABLE `tbl_examtype` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_examtype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_mainstream`
--

DROP TABLE IF EXISTS `tbl_mainstream`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_mainstream` (
  `main_stream_id` int NOT NULL AUTO_INCREMENT,
  `main_stream_name` varchar(255) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`main_stream_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_mainstream`
--

LOCK TABLES `tbl_mainstream` WRITE;
/*!40000 ALTER TABLE `tbl_mainstream` DISABLE KEYS */;
INSERT INTO `tbl_mainstream` VALUES (1,'Engineering and Technology','hhh'),(2,'Medical and Healthcare','aaa'),(3,'Commerce and Business','ccc'),(4,'Arts and Humanities',NULL),(5,'Law and Legal Studies',NULL),(6,'Management',NULL),(7,'Information Technology (IT)',NULL),(8,'Design and Creativity',NULL),(9,'Education and Teaching',NULL),(10,'Civil Services and Government Jobs',NULL),(11,'Hospitality and Tourism',NULL),(12,'Banking and Finance',NULL),(13,'Agriculture and Environmental Sciences',NULL),(14,'Sports and Physical Education',NULL),(15,'Architecture and Planning',NULL),(16,'Media and Communication',NULL),(17,'Science and Research',NULL),(18,'Social Work',NULL),(19,'Linguistics and Languages',NULL),(20,'Defense and Military',NULL);
/*!40000 ALTER TABLE `tbl_mainstream` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_plans`
--

DROP TABLE IF EXISTS `tbl_plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_plans` (
  `plan_id` int NOT NULL,
  `planTypes` varchar(45) NOT NULL,
  `descreption` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`plan_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_plans`
--

LOCK TABLES `tbl_plans` WRITE;
/*!40000 ALTER TABLE `tbl_plans` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_plans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_plans_book`
--

DROP TABLE IF EXISTS `tbl_plans_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_plans_book` (
  `plan_book_id` int NOT NULL,
  `plan_type_id` int NOT NULL,
  `plan_feature_id` int NOT NULL,
  `amount` int NOT NULL,
  `plan_period` varchar(200) DEFAULT NULL,
  `description` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`plan_book_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_plans_book`
--

LOCK TABLES `tbl_plans_book` WRITE;
/*!40000 ALTER TABLE `tbl_plans_book` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_plans_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_plans_features`
--

DROP TABLE IF EXISTS `tbl_plans_features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_plans_features` (
  `plan_fea_id` int NOT NULL,
  `plan_feature` varchar(400) NOT NULL,
  PRIMARY KEY (`plan_fea_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_plans_features`
--

LOCK TABLES `tbl_plans_features` WRITE;
/*!40000 ALTER TABLE `tbl_plans_features` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_plans_features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_report`
--

DROP TABLE IF EXISTS `tbl_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_report` (
  `report_id` int NOT NULL,
  `std_id` int NOT NULL,
  `counselor_id` int NOT NULL,
  `feedBack` varchar(500) DEFAULT NULL,
  `note` text,
  PRIMARY KEY (`report_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_report`
--

LOCK TABLES `tbl_report` WRITE;
/*!40000 ALTER TABLE `tbl_report` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_result`
--

DROP TABLE IF EXISTS `tbl_result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_result` (
  `result_id` int NOT NULL,
  `std_id` int NOT NULL,
  `examName_id` int NOT NULL,
  `perce` float NOT NULL,
  `result_feedback` varchar(400) NOT NULL,
  PRIMARY KEY (`result_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_result`
--

LOCK TABLES `tbl_result` WRITE;
/*!40000 ALTER TABLE `tbl_result` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_roles`
--

DROP TABLE IF EXISTS `tbl_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `roleName` varchar(45) NOT NULL,
  `descreption` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_roles`
--

LOCK TABLES `tbl_roles` WRITE;
/*!40000 ALTER TABLE `tbl_roles` DISABLE KEYS */;
INSERT INTO `tbl_roles` VALUES (1,'Student','Acess for only Student'),(2,'Parent','Access for only parents '),(3,'Counsellor','Access for only Counsellor'),(4,'B2B','Access for only B2B');
/*!40000 ALTER TABLE `tbl_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_std_edu_details`
--

DROP TABLE IF EXISTS `tbl_std_edu_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_std_edu_details` (
  `std_edu_id` int NOT NULL,
  `stdName_id` int NOT NULL,
  `std_board_id` int NOT NULL,
  `instituteName` varchar(200) NOT NULL,
  `mediam` varchar(50) NOT NULL,
  `class` varchar(100) NOT NULL,
  `percent` float NOT NULL,
  PRIMARY KEY (`std_edu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='					';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_std_edu_details`
--

LOCK TABLES `tbl_std_edu_details` WRITE;
/*!40000 ALTER TABLE `tbl_std_edu_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_std_edu_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_std_req_counsellor`
--

DROP TABLE IF EXISTS `tbl_std_req_counsellor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_std_req_counsellor` (
  `std_id` int NOT NULL,
  `examName_id` int NOT NULL,
  `perce_id` int NOT NULL,
  `result_id` int NOT NULL,
  `note` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`std_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_std_req_counsellor`
--

LOCK TABLES `tbl_std_req_counsellor` WRITE;
/*!40000 ALTER TABLE `tbl_std_req_counsellor` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_std_req_counsellor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_sub_stream`
--

DROP TABLE IF EXISTS `tbl_sub_stream`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_sub_stream` (
  `sub_stream_id` int NOT NULL AUTO_INCREMENT,
  `main_stream_id` int NOT NULL,
  `Sub_strem_name` varchar(255) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sub_stream_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_sub_stream`
--

LOCK TABLES `tbl_sub_stream` WRITE;
/*!40000 ALTER TABLE `tbl_sub_stream` DISABLE KEYS */;
INSERT INTO `tbl_sub_stream` VALUES (1,1,'Engineering Clg',NULL),(2,1,'Pharmacy Clg',NULL),(3,3,'Commers clg',NULL);
/*!40000 ALTER TABLE `tbl_sub_stream` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_users`
--

DROP TABLE IF EXISTS `tbl_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `firstName` varchar(250) NOT NULL,
  `lastName` varchar(250) NOT NULL,
  `contact` bigint NOT NULL,
  `email` varchar(250) NOT NULL,
  `state` varchar(250) NOT NULL,
  `city` varchar(100) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `instituteName` varchar(250) DEFAULT NULL,
  `Class` varchar(100) DEFAULT NULL,
  `education` varchar(250) DEFAULT NULL,
  `experience` varchar(100) DEFAULT NULL,
  `jobTime` varchar(100) DEFAULT NULL,
  `consultingPref` varchar(250) DEFAULT NULL,
  `IdProof` varchar(250) DEFAULT NULL,
  `photo` varchar(250) DEFAULT NULL,
  `sscMarkSheet` varchar(250) DEFAULT NULL,
  `hscMarkSheet` varchar(250) DEFAULT NULL,
  `ugCertificate` varchar(250) DEFAULT NULL,
  `pgCertificate` varchar(250) DEFAULT NULL,
  `phdCertificate` varchar(250) DEFAULT NULL,
  `resume` varchar(250) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_users`
--

LOCK TABLES `tbl_users` WRITE;
/*!40000 ALTER TABLE `tbl_users` DISABLE KEYS */;
INSERT INTO `tbl_users` VALUES (1,1,'Vinod','Jadhav',9854758958,'vinodjadhav@gmail.com','maharashtra','pune','male','dkjqdqnkwj','master','master','10 years','full time','nkjked','kjdkejkj','sssss','dddddd','ffffff','ffffff','gggg','dddd','wwwww','wwww'),(4,2,'Vishal','Mavalkar',7507182677,'vishalmavalkar22@gmail.com','maharashtra','pune','male','bhs','fd','master','2 years','full time','nkjked','kjdkejkj','sssss','dsds','sdf','gfg','df','re','gf','123'),(5,3,'Rushikesh','Rout',8180957047,'rushikesh.tekhnologia@gmail.com','maharashtra','pune','male','bhs',NULL,'master','2 years','full time','nkjked','kjdkejkj','sssss','dsds','hdj','gfg','df','re','gf','xyz'),(6,2,'virat','Kohali',8888888888,'virat@gmail.com','maharashtra','pune','male','ejehjwe','master','master','10 years','full time','nkjked','kkkkk','vvvvvvv','ssssss','hhhhhh','uuuuuu','dfppppp','phphphphp','gdj','123'),(7,2,'Rahul','Patil',748932343,'rrr1@gmail.com','maharashtra','pune','male','ejehjwe','master','master','5 years','full time','nkjked','kjdkejkj','sssss','dsds','fdf','gfg','df','re','gf','123'),(8,3,'XYZ','nfjke',748932343,'rrr@gmail.com','maharashtra','pune','male','ejehjwe','master','master','5 years','full time','nkjked','kjdkejkj','sssss','dsds','fdf','gfg','df','re','gf','123'),(10,1,'Rahul','Patil',9743784377,'xdd@gmail.com','maharashtra','pune','male','bhjwrfq','12th','fbhqbq','12b','full time','dfdf','Uploads\\1729254946972.png','Uploads\\1729254946973.png','Uploads\\1729254946975.png','Uploads\\1729254946975.png','Uploads\\1729254946979.png','Uploads\\1729254946982.png','Uploads\\1729254946984.png','Uploads\\1729254946984.png','111'),(11,3,'Rahul','Patil',9743784377,'xyz@gmail.com','maharashtra','pune','male','bhjwrfq','12th','fbhqbq','12b','full time','dfdf','Uploads\\1729487628993.png','Uploads\\1729487628996.png','Uploads\\1729487628998.png','Uploads\\1729487628998.png','Uploads\\1729487629004.png','Uploads\\1729487629007.png','Uploads\\1729487629011.png','Uploads\\1729487629012.png','111'),(12,2,'Jamal','Jadhav',3545512456,'jamalj12@gmail.com','Maha','Amt','Male','dfvvrfre','7th',NULL,'ghfvh','ghcvh','fcfhh','Uploads\\1729487995001.png','Uploads\\1729487995002.png','Uploads\\1729487995004.png','Uploads\\1729487995005.png','Uploads\\1729487995006.png','Uploads\\1729487995007.png','Uploads\\1729487995015.png','Uploads\\1729487995016.png','123'),(13,2,'Jamal','Jadhav',3545512456,'jamalj@gmail.com','Maha','Amt','Male','dfvvrfre','7th',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'123'),(17,1,'ssss','ddd',5434343343,'eee@gmail.com','mahaew','sdd','dds','dsdsddwewe','rfd','wewew','12','ewe','dffd','','','','','','','','',''),(18,1,'hwe','jf',678738223,'hhh@gmail.com','fhsf','hjf','hcjd','bjdf','jsf','jhf','bjsdf','jfkf','','','','','','','','','',''),(19,1,'Rahul','Patil',9743784377,'zz@gmail.com','maharashtra','pune','male','bhjwrfq','12th','fbhqbq','12b','full time','dfdf','Uploads\\1729493331946.png','Uploads\\1729493331947.png','Uploads\\1729493331948.png','Uploads\\1729493331949.png','Uploads\\1729493331954.png','Uploads\\1729493331957.png','Uploads\\1729493331959.png','Uploads\\1729493331960.png','111'),(20,1,'Jamal','Jadhav',3545512456,'jamalj2@gmail.com','Maha','Amt','Male',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'123'),(21,2,'Jamal','Jadhav',3545512456,'jamalj4@gmail.com','Maha','Amt','Male','dfvvrfre','7th',NULL,'ghfvh','ghcvh','fcfhh','Uploads\\1729493830321.png','Uploads\\1729493830322.png','Uploads\\1729493830324.png','Uploads\\1729493830325.png','Uploads\\1729493830326.png','Uploads\\1729493830326.png','Uploads\\1729493830337.png','Uploads\\1729493830337.png','123'),(22,2,'Jamal','Jadhav',3545512456,'jamalj5@gmail.com','Maha','Amt','Male',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'123'),(23,4,'drgdg','fgfh',2113255114,'gttc','dvsdfbsdb','sdvbdsvdv','dzvdzvzdv','sdvsdvzd',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'er'),(24,4,'haha','dsvsdv',8523669944,'ftf@gmail.com','gvds','dvdvfdv','vfvdf','vfdvbdzf',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'123'),(25,4,'dfgbdfb','vfvdf',1234569873,'hj@gmail.com','dsvasdv','dscvsdc ','sdcsdc','dcsdc',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'dcd'),(26,4,'kaka','ggdfg',2313216654,'dasfa@gmail.com','MAHARASHTRA','PUNE','dsvdsv','svs',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'123'),(27,4,'mama','nnhtrh',2313113112,'mama@gmail.com','gbgf','sdgvfdv','xdcvxcv','sdvx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'123'),(28,1,'jaja','dcdcd',3635259999,'jaja@gmail.com','dcdsc','dcasc','scsc','ascc',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'123'),(29,1,'lala','scasc',8529637413,'lala@gmail.com','cfasc','scsa','scascsa','scasc',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'123'),(30,2,'ola','dcdsc',7894561236,'ola@gmail.com','edfs','csdc','dcsdc',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'123'),(31,4,'vvvvv','mmmm',888888888,'bvbvbvb@gmail.com','maharahstra','pune','male','jshdjs','12th','HSC','1','','','','','','','','','','',''),(32,4,'kamal','rsgvsd',551151131151,'kamal@gmail.com','fhg','vsdvsd','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'user@123'),(33,4,'Kailash','dfgsdg',7575241,'kailash@gmail.com','dvdsvd','vscx xx','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'user@123'),(34,1,'Akshay','dcds',782782872,'akshay@gmail.com','rr','rrevv','dfvdfv','fv',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'123'),(35,4,'Bhalla','Dev',213151221345,'bhalla@gmail.com','dfdfv','fdvdfv','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'user@123'),(42,3,'Shahid','fgdg',5231231313,'rushikeshrautkak@gmail.com','Maharashtra','Akola','Male',NULL,NULL,'Graduation','3-5','Part Time','10th',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'user@123');
/*!40000 ALTER TABLE `tbl_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'cvdb'
--
/*!50003 DROP PROCEDURE IF EXISTS `CreateRoles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateRoles`(
 IN roleName VARCHAR(255),
    IN descreption VARCHAR(255)
)
BEGIN
 INSERT INTO tbl_roles (roleName, descreption)
    VALUES (roleName, descreption);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateUser`(
IN role_id int,
IN firstName varchar(250),
IN lastName varchar(250),
IN contact bigint,
IN in_email varchar(250),
IN state varchar(250),
IN city varchar(250),
IN gender varchar(10),
IN instituteName varchar(250),
IN Class varchar(250),
IN education varchar(250),
In experience varchar(250),
In jobTime varchar(250),
IN consultingPref varchar(250),
IN IdProof varchar(250),
IN photo varchar(250),
IN sscMarkSheet varchar(250),
IN hscMarkSheet varchar(250),
IN ugCertificate varchar(250),
IN pgCertificate varchar(250),
IN phdCertificate varchar(250),
In resume varchar(250),
IN password varchar(100)
)
BEGIN
  -- Check if email already exists
    DECLARE emailExists INT;

    SELECT COUNT(*)
    INTO emailExists
    FROM tbl_users
    WHERE email = in_email;

    IF emailExists > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: Email already exists.';
    ELSE
    
INSERT INTO tbl_users(role_id, firstName, lastName, contact, email, state, city, gender, instituteName, Class, education, experience, jobTime, consultingPref, IdProof, photo, sscMarkSheet,hscMarkSheet, ugCertificate, pgCertificate, phdCertificate, resume, password)
    VALUES (role_id, firstName, lastName, contact, in_email, state, city, gender, instituteName, Class, education, experience, jobTime, consultingPref, IdProof, photo, sscMarkSheet, hscMarkSheet, ugCertificate, pgCertificate, phdCertificate, resume, password);
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteUserById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteUserById`(In id int)
BEGIN
	 DELETE FROM tbl_users WHERE user_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllCounsellor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllCounsellor`()
BEGIN
	select * from tbl_users where role_id = 3;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllMainStreams` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllMainStreams`()
BEGIN
	select * from tbl_mainstream;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllMainStreamWiseSubStreams` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllMainStreamWiseSubStreams`(In id int)
BEGIN
	select * from tbl_sub_stream where main_stream_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllroles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllroles`()
BEGIN
select * from tbl_roles;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllSubStreams` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllSubStreams`(In id int)
BEGIN
	select * from tbl_sub_stream where main_stream_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllUsers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllUsers`()
BEGIN
select * from tbl_users;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getRolesById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getRolesById`(IN id INT)
BEGIN
select * from tbl_roles where role_id= id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUsersById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUsersById`(In id int)
BEGIN
select * from tbl_users where user_id= id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `LoginUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `LoginUser`(
  IN user_email VARCHAR(250))
BEGIN
	SELECT * FROM tbl_users WHERE email = user_email;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Roles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Roles`(
 IN roleName VARCHAR(255),
    IN descreption VARCHAR(255)
)
BEGIN
 INSERT INTO tbl_roles (roleName, descreption)
    VALUES (roleName, descreption);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SendOTPByEmailOrPhone` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SendOTPByEmailOrPhone`(
    IN email_phone VARCHAR(250)
)
BEGIN
    SELECT * FROM tbl_users
    WHERE email = email_phone OR contact = email_phone;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateRole` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateRole`(
IN id INT,
IN user_roleName varchar(250),
IN user_descreption varchar(250)
)
BEGIN
Update tbl_roles 
SET roleName = user_roleName,
	descreption = user_descreption
    where role_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateUserById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateUserById`(
In id int,
IN role_id int,
IN firstName varchar(250),
IN lastName varchar(250),
IN contact bigint,
IN email varchar(250),
IN state varchar(250),
IN city varchar(250),
IN gender varchar(10),
IN instituteName varchar(250),
IN Class varchar(250),
IN education varchar(250),
In experience varchar(250),
In jobTime varchar(250),
IN consultingPref varchar(250),
IN IdProof varchar(250),
IN photo varchar(250),
IN sscMarkSheet varchar(250),
IN hscMarkSheet varchar(250),
IN ugCertificate varchar(250),
IN pgCertificate varchar(250),
IN phdCertificate varchar(250),
In resume varchar(250),
IN password varchar(100),
 IN updated_by VARCHAR(50)
)
BEGIN
update tbl_users
SET role_id = role_id,
 firstName = firstName,
 lastName = lastName,
 contact = contact,
 email = email,
 state = state,
 city = city,
 gender = gender,
 instituteName = instituteName,
 class = Class,
 education = education,
 experience = experience,
 jobTime = jobTime,
 consultingPref = consultingPref,
 IdProof= IdProof,
 photo = photo,
 sscMarkSheet = sscMarkSheet,
 hscMarkSheet = hscMarkSheet,
 ugCertificate = ugCertificate,
 pgCertificate = pgCertificate,
 phdCertificate = phdCertificate,
 resume = resume,
 password = password
 where user_id= id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-12 11:02:59