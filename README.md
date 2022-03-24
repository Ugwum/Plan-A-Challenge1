# Plan-A-Challenge1

# This is a simple guide to setup, deploy and Run the kuberntes cluster with a node js microservice

# Prerequisites
 
This is a simple guide to install and step kubernetes cluster locally preferrably windows 

1. Install/ Setup Hyper-V & Docker in order to use Kubernetes.

2. Install Docker for Windows or Docker for Mac (If you're on Windows 7 install Docker Toolbox: http://docker.com/toolbox).

For more details readup the documentation

3. Install/Enable Kubernetes with kubectl locally
  Please note:
  Docker Desktop includes a standalone Kubernetes server and client, as well as Docker CLI integration that runs on your machine. 
  The Kubernetes server runs locally within your Docker instance, is not configurable, and is a single-node cluster.
  The Kubernetes server runs within a Docker container on your local system, and is only for local testing. Enabling Kubernetes allows you to deploy your workloads in parallel, on Kubernetes, Swarm, and as standalone containers. 
  Enabling or disabling the Kubernetes server does not affect your other workloads.

For more details on enabling kubernetes locally with Docker desktop Follow the link https://docs.docker.com/desktop/kubernetes/


##To Deploy and run the dockerized node js microservice app with Kuberntes 

# STEP 1 
 Clone the Repository  git clone https://github.com/Ugwum/Plan-A-Challenge1.git

# STEP 2
Open a command prompt  and change directory to the root of the simplemicroservice i.e cd  Plan-A-Challenge1\simplemicroservice 

# STEP 3
Run the command "kubectl apply -f simplemicroservice.deployment.yaml"     

 please note step 3 is successful if kubernetes setup is done properly

#STEP 4
    
 Run kubectl get pods
 
#STEP 5

 Navigate to http://localhost:8909 in your browser.