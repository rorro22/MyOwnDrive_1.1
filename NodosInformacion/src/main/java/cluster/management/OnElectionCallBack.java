package cluster.management;

public interface OnElectionCallBack {

    void onElectedToBeLeader();

    void onWorker();

}
