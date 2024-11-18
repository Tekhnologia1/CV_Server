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
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_sub_stream`
--

LOCK TABLES `tbl_sub_stream` WRITE;
/*!40000 ALTER TABLE `tbl_sub_stream` DISABLE KEYS */;
INSERT INTO `tbl_sub_stream` VALUES (1,1,'Mechanical Engineering',NULL),(2,1,'Electrical Engineering',NULL),(3,1,'Civil Engineering',NULL),(4,1,'Computer Science & IT',NULL),(5,1,'Chemical Engineering',NULL),(6,2,'Medicine',NULL),(7,2,'Nursing',NULL),(8,2,'Pharmacy',NULL),(9,2,'Allied Health',NULL),(10,2,'Dentistry',NULL),(11,3,'Finance',NULL),(12,3,'Accounting',NULL),(13,3,'Marketing',NULL),(14,3,'Human Resources',NULL),(15,3,'Operations & Supply Chain',NULL),(16,4,'Literature',NULL),(17,4,'History',NULL),(18,4,'Psychology',NULL),(19,4,'Sociology',NULL),(20,4,'Political Science',NULL),(21,5,'Corporate Law',NULL),(22,5,'Criminal Law',NULL),(23,5,'Intellectual Property Law',NULL),(24,5,'International Law',NULL),(25,5,'Environmental Law',NULL),(26,5,'Human Rights Law',NULL),(27,6,'General Management',NULL),(28,6,'Human Resource Management',NULL),(29,6,'Financial Management',NULL),(30,6,'Marketing Management',NULL),(31,6,'Supply Chain Management',NULL),(32,6,'IT & Systems Management',NULL),(33,7,'Software Development',NULL),(34,7,'Data Science',NULL),(35,7,'Cybersecurity',NULL),(36,7,'Cloud Computing',NULL),(37,7,'Artificial Intelligence',NULL),(38,8,'Graphic Design',NULL),(39,8,'Fashion Design',NULL),(40,8,'Interior Design',NULL),(41,8,'Product Design',NULL),(42,9,'Primary Education',NULL),(43,9,'Secondary Education',NULL),(44,9,'Higher Education',NULL),(45,9,'Educational Administration',NULL),(46,9,'Educational Counseling',NULL),(47,9,'Online and Adult Education',NULL),(48,10,'Indian Administrative Services (IAS)',NULL),(49,10,'Indian Police Services (IPS)',NULL),(50,10,'Indian Foreign Services (IFS)',NULL),(51,10,'Railway Services',NULL),(52,10,'Revenue Services',NULL),(53,10,'State Civil Services',NULL),(54,11,'Hotel Management',NULL),(55,11,'Event Management',NULL),(56,11,'Travel and Tourism Management',NULL),(57,11,'Culinary Arts',NULL),(58,11,'Resort and Spa Management',NULL),(59,11,'Cruise Ship Management',NULL),(60,12,'Retail Banking',NULL),(61,12,'Investment Banking',NULL),(62,12,'Corporate Banking',NULL),(63,12,'Insurance and Risk Management',NULL),(64,12,'Stock Market and Securities',NULL),(65,12,'Financial Analysis',NULL),(66,13,'Agricultural Science',NULL),(67,13,'Animal Science',NULL),(68,13,'Environmental Science',NULL),(69,13,'Agribusiness',NULL),(70,13,'Sustainable Development',NULL),(71,13,'Forestry and Wildlife',NULL),(72,14,'Sports Coaching',NULL),(73,14,'Sports Management',NULL),(74,14,'Physical Education',NULL),(75,14,'Sports Medicine',NULL),(76,14,'Sports Psychology',NULL),(77,14,'Recreation Management',NULL),(78,15,'Architecture',NULL),(79,15,'Urban Planning',NULL),(80,15,'Interior Design',NULL),(81,15,'Environmental Planning',NULL),(82,15,'Transport Planning',NULL),(83,15,'Heritage Conservation',NULL),(84,16,'Journalism',NULL),(85,16,'Public Relations',NULL),(86,16,'Advertising',NULL),(87,16,'Digital Media',NULL),(88,17,'Physics',NULL),(89,17,'Chemistry',NULL),(90,17,'Biology',NULL),(91,17,'Mathematics',NULL),(92,17,'Environmental Science',NULL),(93,18,'Child and Family Welfare',NULL),(94,18,'Medical and Public Health Social Work',NULL),(95,18,'Mental Health and Substance Abuse',NULL),(96,18,'Community Development',NULL),(97,18,'School Social Work',NULL),(98,18,'Human Rights and Advocacy',NULL),(99,19,'Language Teaching',NULL),(100,19,'Translation and Interpretation',NULL),(101,19,'Language Research and Development',NULL),(102,19,'Computational Linguistics',NULL),(103,19,'Lexicography',NULL),(104,19,'Sign Language Interpretation',NULL),(105,20,'Army',NULL),(106,20,'Navy',NULL),(107,20,'Air Force',NULL),(108,20,'Special Forces',NULL),(109,20,'Intelligence and Cybersecurity',NULL),(110,20,'Logistics and Support',NULL);
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
  `password` varchar(500) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_users`
--

LOCK TABLES `tbl_users` WRITE;
/*!40000 ALTER TABLE `tbl_users` DISABLE KEYS */;
INSERT INTO `tbl_users` VALUES (47,1,'vishal','mavalkar',9743784377,'vishal@gmail.com','maharashtra','pune','male',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$Do/vBYldQKqPTtKICWtnXeAV7t4gbdXRU6MFAdDSU3oX2aREwZj3K'),(48,2,'rushikesh','rout',9743784377,'rushikesh@gmail.com','maharashtra','pune','male','bhjwrfq','12th','fbhqbq','12b','full time','dfdf',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$VDiMIJOe.9fWI4vUWe6C2uxCBDfzYuGAVyUAAr0qfSG/AOyTGf2pO'),(49,1,'Mama','agvXJa',9743784377,'mamaa1@gmail.com','maharashtra','pune',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$1MCwozO3reoGThI.rJrSLeTjqzR.ZN0tCLFpScUsFwhh4NexW/Hie'),(50,1,'Mama','agvXJa',9743784377,'mamaa@gmail.com','maharashtra','pune','male',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$H3nQEanl52gX4us8fHU3fOQsdXaoT.U74wOSekw0AsiVnnh46/yaG'),(51,1,'Rahul','Patil',9743787777,'rahul@gmail.com','maharashtra','pune','male','bhjwrfq','12th','fbhqbq','12b','full time','dfdf',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$0xKi4qf4BhzElHmSmkzqfu/1wHWkkxKtyY9R/MO6tDy18XrYzn.Ne'),(52,1,'Rahulff','Patil',9743787777,'rahul11@gmail.com','maharashtra','pune','male','bhjwrfq','12th','fbhqbq','12b','full time','dfdf',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$dR.VnmM/wtervivHcxPak.b/LI87HsSehndZcPdi1n8eAHokUSFYy');
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

-- Dump completed on 2024-11-18 10:01:35
