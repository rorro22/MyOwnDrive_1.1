# MyOwnDrive v1.1

MyOwnDrive is a distributed file system with a frontend application that connects to the ZooKeeper server. The system is designed to efficiently manage and provide access to ebooks through a distributed infrastructure of 4 nodes. Each node has a specific role, including searching, storing, calculating, and provisioning resources.

## Features

- **Search Engine:** The frontend application features a robust search engine that allows users to find ebooks based on keywords.
  
  - **Distributed Infrastructure:** The system operates as a distributed file system, distributing tasks across 4 nodes to optimize resource management.

- **Resource Roles:**
    - *Search Node:* Manages search functionality, ensuring quick and accurate results.
    - *Storage Node:* Handles the storage of ebooks, maintaining a reliable and scalable storage solution.
    - *Calculation Node:* Performs calculations related to ebook compatibility, enhancing the user experience.
    - *Provisioning Node:* Manages the provision of ebooks, ensuring efficient access for users.
 
  *Note:    In a distributed application with a node-based architecture, each type of node can have specific functions, and their contribution is crucial for the joint operation of the system. The need to start the nodes before seeing     information may be due to various factors, including task distribution, coordination, and synchronization between nodes. Here is a description of the general functions of the four types of nodes you mentioned:
            
    **Search Node**:
            
            -Function: Manages search functionality, ensuring quick and accurate results.
            -Significance: Responsible for searching and retrieving relevant information based on user search queries.
            -Relation to Front-End: The Front-End may depend on the Search Node to get search results and present them to the user.
    
    **Storage Node**:
            
            -Function: Handles the storage of ebooks, maintaining a reliable and scalable storage solution.
            -Significance: Stores and retrieves ebooks efficiently, ensuring fast and reliable access when needed.
            -Relation to Front-End: The Front-End may require data stored in the Storage Node to present detailed information about ebooks.
    
    **Calculation Node**:
            
            -Function: Performs calculations related to ebook compatibility, enhancing the user experience.
            Significance: Responsible for performing complex calculations or data processing that improves the user experience in terms of ebook compatibility.
            Relation to Front-End: Can provide information about ebook compatibility, which is then presented to the user.
    
    **Provisioning Node**:
            
            -Function: Manages the provision of ebooks, ensuring efficient access for users.
            -Significance: Responsible for ensuring that users have efficient access to the ebooks they want by managing availability and supply.
            -Relation to Front-End: Can directly affect the availability and accessibility of ebooks for users.
    **Leader**:
            In a distributed system, choosing a leader may be necessary to coordinate and synchronize operations between nodes. The leader may be responsible for centralized decision-making, task allocation, and coordinating communication between nodes. Choosing a leader helps avoid conflicts and maintains consistency in the system.
            
    **Reasons to Start the Nodes**:
            
            Coordination: Nodes must be active to coordinate and communicate with each other.
            Service Availability: Information will only be available when the services provided by the nodes are operational.
            Synchronization: Node synchronization may require all nodes to be active and in an operational state.
            The need to start the nodes before seeing information may be because the information required for user presentation comes from operations performed by these nodes. Without active nodes, the application may not have access to the   necessary information to display results on the Front-End.

## Technology Stack

  - **Backend:** Java
  - **Frontend:** HTML, CSS, JavaScript

## Future Enhancements

  - **Load Balancing:** Planned implementation to distribute workloads evenly across nodes, improving system performance and scalability.
  
  - **Cloud Storage Integration:** Upcoming feature to enable storage in the cloud, enhancing accessibility and data durability.

## Importance of ZooKeeper Server

The ZooKeeper server plays a critical role in the MyOwnDrive system. It serves as a centralized coordination service that ensures synchronization among the distributed nodes. The importance of the ZooKeeper server includes:

  - **Configuration Management:** ZooKeeper manages and stores configuration information, ensuring consistency across all nodes.
  
  - **Leader Election:** Facilitates leader election, crucial for maintaining a single point of control in a distributed environment.
  
  - **Synchronization:** Ensures that distributed nodes are synchronized and aware of each other's states, promoting system reliability.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/rorro22/MyOwnDrive_1.1.git

2. **Installation:**

  **Zookeper**: Install and configure the ZooKeeper server on your system. You can download it from Apache ZooKeeper.
                _Follow the ZooKeeper Getting Started Guide for installation and configuration instructions._

   **JDK (Java Development Kit)**: Ensure the JDK is installed on your system. If not, download and install it from Oracle JDK.

   **Maven**: Make sure Maven is installed. If not, download and install it from Maven Apache.

4. **Run the Application:**
   
  - Configure Environment Variables:
  
  - Set up the necessary environment variables for Java and Maven. Update your system's PATH variable to include the directories where Java and Maven are installed.
  - 
  -_Configure the JAVA_HOME environment variable to point to the directory where your JDK is installed._-
  
  -_Configure the mvn environment variable to point to the directory where your MAVEN is installed._-
  
  - Start the frontend application and ensure that the ZooKeeper server is running for proper system coordination.

## Contributions and Issues

We welcome contributions and feedback! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.


## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and adapt it to your needs. If you have any recommendations or improvements, we encourage you to contribute!

*Note: The backend is currently implemented in Java. While it serves the purpose well, considering the evolving technology landscape, I personally recommend exploring the use of GoLang for future development. GoLang's simplicity, concurrency support, and efficient performance make it an excellent choice for distributed systems like MyOwnDrive.*
