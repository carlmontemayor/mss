# CPE 400 Final Project

## Microservice Simulation Software (MSS)

Curtis Chung and Carl Montemayor
Instructors: Shamik Sengupta
Due: December 7

## Project Overview

In recent years, the micro-service architecture has been favored by many software companies as a way to structure large projects and applications so that independent pieces of software can be developed asynchronously and with little to no dependencies. In this type of architecture, pieces of software are broken apart into smaller "services" that are self-contained and functional (usually deployed via cloud services). The result is a graph-like network of several services that communicate with one another via HTTP or RPC. Although this provides many benefits to developers, opting into this architecture presents many difficult tasks such as how these services communicate with other services and how to share such data and information in an efficient manner.

This project aims to develop a network monitoring system specific to the micro-service architecture. It presents itself as an online web application that allows for users to simulate the passing of data, messages, and information to these services and the creation of new services in a user-friendly manner. Users will be able to simulate the creation of their own "services" whether it be an API, database, or website, and track the metrics associated with these interactions such as delays, errors, and latency in their system.

## Technical Report: Implementation

For the project, we built a system where users can simulate their own micro service network system and build all the different connections to each node. Each node can act as different aspects of a network system, such as databases, frontend, etc. This project is to give a visual simulation of the test cases and scenarios rather than lines on a command line. When on the web application, the user will have the option to run the simulation and choose between three different scenarios. Each scenario will break down a different node, while the nodal re-routing algorithm will choose an optimal node to make a new connection to without interrupting any nodal processes.

The purpose of this project is to give a novel solution to network testing scenarios and problems within business networks. The visual simulation allows software developers an easier way to see how each node (network structures) interacts with one another with their connections and if one crashes, it's easier to see which nodes it will affect. Each node in our simulation has a different weight to it. Higher weights mean it is more important to the network, and therefore is much less likely to crash. If a node were to crash, the node itself and any connections will turn red as displayed in Figure 1.

Figure 1: “Cool” Simulation before and after user clicks run and crashes one node

## Analysis

When certain aspects of the network crash, appropriate actions will occur in our simulation. For example, if the database or main node were to crash in our simulation, there are no other databases to reroute any connections to, so there is no choice but to wait for it to come back up in order for the service to continue to function properly. If smaller aspects, such as the API, were to crash, then the graph will choose an appropriate node to reroute the connections to until the service is back on. In the case of Figure 2, if the node labeled as the database (PostgreSQL) were to become red and crash, there would be no way to reroute the nodes connected to it to another node. Even if there were multiple databases, each one would fill a specific role. One database node cannot take over the functions of another database node, therefore there is no choice but to wait for it to boot back up.

Figure 2: A more intricate network layed out in our simulation. Other PostgreSQL nodes cannot be rerouted to connect to other nodes if one were to crash. Each PostgreSQL node has a specific purpose and cannot cover for one another.

When running our simulation, a few things came to note of real-life network failures and some that we may not be able to completely resolve in our simulation. Table 1 states a few cases that we can implement our project.
Real Life Cases
Consequences
Nodes can crash and lose all of it’s connections to other nodes.
When a node crashes, the ability to communicate the information necessary for other nodes. Can be rerouted
Main/Important nodes crash
Nothing can be done except to wait until that main node/service comes back up. Cannot reroute
Multiple nodes crash
Difficult to reroute. Depending on the multitude of nodes crash and the specifics of which one, can be hard or impossible to reroute in real network situations

Table 1: Scenarios of nodal failures and the consequences of how they may affect the final result.

