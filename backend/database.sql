-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `simple-mvc`
--

-- --------------------------------------------------------

--
-- Structure de la table `project`
--

CREATE TABLE `project` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `date` varchar(50) NOT NULL,
  `image` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `project`
--

INSERT INTO `project` (`id`, `name`, `description`, `date`, `image`, `link`) VALUES
(1, 'Trombinoscope', 'Premier projet de groupe à la Wild Code School. Trombinoscope de notre promotion', '03/2022', 'trombinoscope.png', 'https://Valentin-Morette.github.io/trombinoscope/'),
(2, 'Posteries', "Second projet de groupe à la Wild Code School. Jeu faisant appel à l'API 'The Movie Database', qui consiste à deviner le plus rapidement possible le poster d'un film.", '05/2022', 'posteries.png', 'https://github.com/Valentin-Morette/project-2-posteries'),
(3, 'Wild Code Wars', "Page utilisant l'API du jeu d'algorithme Code Wars, regroupe les statistiques de toute la promotion de la Wild Code School sur le jeu.", '05/2022', 'wcw.png', 'https://Valentin-Morette.github.io/wild-code-wars/'),
(4, 'Mario 64 Soluce', "Site de solution du jeu Mario 64 sous format vidéo. Projet personnel pour m'entraîner avec une base de données.", '06/2022', 'mario.png', 'https://github.com/Valentin-Morette/m64soluce'),
(5, 'Coockie-Cliker', "Jeu qui reprend le principe du jeu Cookie-Clicker, c'est un terrain de jeu pour m'exercer à React en dehors des exercices des cours.", '04/2022', 'cc.png', 'https://Valentin-Morette.github.io/coockie_cliker/');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

-- -----------------------------------------------------------------------------------------

CREATE TABLE `tech` (
  `id` int(11) UNSIGNED NOT NULL,
  `techno` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `tech`
--

INSERT INTO `tech` (`id`, `techno`) VALUES
(1, 'Git'),
(2, 'Github'),
(3, 'HTML'),
(4, 'CSS'),
(5, 'JavaScript'),
(6, 'React'),
(7, 'Node.js'),
(8, 'Express'),
(9, 'MySQL'),
(10, 'PHP'),
(11, 'Python');

--
-- Index pour les tables exportées
--

-- SELECT p.id, p.name, t.name FROM project p JOIN project_tech AS pt ON p.id = pt.project_id JOIN tech AS t ON t.id = pt.tech_id; WHERE t.id = 1 OR t.id = 2 OR t.id = 3 OR t.id = 4 OR t.id = 5 OR t.id = 6 OR t.id = 7 OR t.id = 8 OR t.id = 9 OR t.id = 10 OR t.id = 11;

--
-- Index pour la table `tech`
--
ALTER TABLE `tech`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `tech`
--
ALTER TABLE `tech`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

-- -----------------------------------------------------------------------------------------

--
-- Structure de la table `project_tech`
--

CREATE TABLE `project_tech` (
  `project_id` int(11) UNSIGNED NOT NULL,
  `tech_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_project_tech_project
        FOREIGN KEY (project_id)
        REFERENCES project(id),
  CONSTRAINT fk_project_tech_tech
        FOREIGN KEY (tech_id)
        REFERENCES tech(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `project_tech` 
--

INSERT INTO `project_tech` (`project_id`, `tech_id`) VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(2,1),
(2,2),
(2,4),
(2,6),
(2,7),
(2,8),
(2,9),
(3,1),
(3,2),
(3,4),
(3,6),
(4,1),
(4,2),
(4,4),
(4,6),
(4,7),
(4,8),
(4,9),
(5,1),
(5,2),
(5,4),
(5,6);

