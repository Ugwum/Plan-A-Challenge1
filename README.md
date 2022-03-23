# Plan-A-Challenge1

# Step to and Deploying the kubernetes.yaml and Running the kuberntes cluster with the microservice deployed
 
This is a simple guide to install and step kubernetes cluster on window

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


##To Deploy and run the microservice app  Kuberntes 


4. Open a command prompt at the root of the Challenge1\SimpleMicroservice 

5. Provided Kubernetes cli setup properly done
   Run the command "kubectl apply -f node-app-deployment.yaml"

6. Run kubectl get pods

7. Navigate to http://localhost:8909 in your browser.