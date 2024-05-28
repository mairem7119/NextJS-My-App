import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-3 space-y-4">
      <h1 className="text-2xl font-medium text-amber-600">About</h1>
      <p>
        Whether you are planning to start your career in DevOps, or you are
        already into it, if you do not have Docker listed on your resume, it’s
        undoubtedly time for you to think about it, as Docker is one of the
        critical skill for anyone who is into DevOps arena. In this post, I will
        try my best to explain Docker in the simplest way I can. Before we take
        a deep dive and start exploring Docker, let’s take a look at what topics
        we will be covering as part of this beginner’s guide.
      </p>
      <p>
        Let’s look at how we could solve this problem without making use of
        Docker. In such a scenario, we could solve this problem either by having
        three physical machines, or a single physical machine, which is powerful
        enough to host and run three virtual machines on it. Both the options
        would allow us to install different versions of Python on each of these
        machines, along with their associated dependencies. Irrespective of
        which solution we choose, the costs associated with procuring and
        maintaining the hardware are quite expensive.
      </p>

      <p>
        The machine on which Docker is installed and running is usually referred
        to as a Docker Host or Host in simple terms. So, whenever you plan to
        deploy an application on the host, it would create a logical entity on
        it to host that application. In Docker terminology, we call this logical
        entity a Container or Docker Container to be more precise. A Docker
        Container doesn’t have any operating system installed and running on it.
        But it would have a virtual copy of the process table, network
        interface(s), and the file system mount point(s). These have been
        inherited from the operating system of the host on which the container
        is hosted and running.
      </p>
    </div>
  );
}
