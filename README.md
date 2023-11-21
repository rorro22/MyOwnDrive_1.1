# MyOwnDrive_1.1
_The following project is the simplest version of my first repository 'MyOwnDrive,' which I plan to finish in the future. However, due to time constraints and project deadlines at school, I was forced to use some tools to facilitate the work._

_*In the 'origin' branch, you can find the backend files.*_

---------------------------

For the latest information about ZooKeeper, please visit our website at:

   http://zookeeper.apache.org/

and our wiki, at:

   https://cwiki.apache.org/confluence/display/ZOOKEEPER

Full documentation for this release can also be found in docs/index.html

---------------------------
Packaging/release artifacts

The release artifact contains the following jar file at the toplevel:

zookeeper-<version>.jar         - legacy jar file which contains all classes
                                  and source files. Prior to version 3.3.0 this
                                  was the only jar file available. It has the 
                                  benefit of having the source included (for
                                  debugging purposes) however is also larger as
                                  a result

The release artifact contains the following jar files in "dist-maven" directory:

zookeeper-<version>.jar         - bin (binary) jar - contains only class (*.class) files
zookeeper-<version>-sources.jar - contains only src (*.java) files
zookeeper-<version>-javadoc.jar - contains only javadoc files

These bin/src/javadoc jars were added specifically to support Maven/Ivy which have 
the ability to pull these down automatically as part of your build process. 
The content of the legacy jar and the bin+sources jar are the same.

As of version 3.3.0 bin/sources/javadoc jars contained in dist-maven directory
are deployed to the Apache Maven repository after the release has been accepted
by Apache:
  http://people.apache.org/repo/m2-ibiblio-rsync-repository/

---------------------------

**ZooKeeper**:

ZooKeeper is a distributed coordination service used to manage and coordinate large-scale distributed systems. It provides a set of essential services such as synchronization, configuration management, and leader election, making it fundamental for building robust and reliable distributed systems.

bin Folder
In the bin folder of ZooKeeper, you will find executable files that are essential for the administration and execution of a ZooKeeper cluster. Here's a brief description of two of these files:

zkCli.cmd (ZooKeeper Client):
This file is used to start the ZooKeeper Command Line Interface (CLI). Through the CLI, you can interact with the ZooKeeper server to perform operations such as creating nodes, reading data, and monitoring the cluster's state.

zkServer.cmd (ZooKeeper Server):
This file is used to start the ZooKeeper server. The server is responsible for managing and coordinating the distributed state among the cluster nodes. Running this script initializes the ZooKeeper server and prepares it to accept client connections.

--------------------------------------------------------
**Usage**:

Start the ZooKeeper Server:
Execute the following command in the terminal to start the ZooKeeper server:

C:\path\to\zookeeper-3.4.12\bin>zkServer.cmd
Ensure that Java and the environment are configured correctly (as discussed in previous messages).

Start the ZooKeeper Client:
Execute the following command in the terminal to start the ZooKeeper Command Line Interface:

C:\path\to\zookeeper-3.4.12\bin>zkCli.cmd
This will take you to the interactive ZooKeeper Command Line Interface where you can perform various operations.


*Note: The project is currently in the master branch. 
