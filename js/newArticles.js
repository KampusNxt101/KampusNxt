// Add new articles here. No database is required.
const posts = [
  {
    id: "kubernetes-troubleshooting",
    title: "Kubernetes Troubleshooting: A Practical Guide",
    category: "Kubernetes",
    date: "2026-08-13",
    readTime: "7 min read",
    image: "images/kubernetes.svg",
    excerpt: "A practical approach to diagnosing Pending, CrashLoopBackOff, ImagePullBackOff and NodeNotReady problems.",
    tags: ["Kubernetes", "Troubleshooting", "DevOps"],
    content: `
      <h2>Start with the symptom</h2>
      <p>Kubernetes troubleshooting becomes much easier when the symptom is translated into a concrete object and lifecycle stage. Start with the namespace, workload, pod and node involved.</p>
      <pre><code>kubectl get pods -A
kubectl describe pod &lt;pod-name&gt; -n &lt;namespace&gt;
kubectl get events -n &lt;namespace&gt; --sort-by=.lastTimestamp</code></pre>
      <h2>Check the most common failure modes</h2>
      <ul>
        <li><strong>Pending:</strong> inspect scheduling events, resource requests, taints and affinity.</li>
        <li><strong>CrashLoopBackOff:</strong> inspect logs, exit codes, probes and application configuration.</li>
        <li><strong>ImagePullBackOff:</strong> verify image name, registry access and image-pull credentials.</li>
        <li><strong>NodeNotReady:</strong> investigate node health, kubelet, networking and resource pressure.</li>
      </ul>
      <h2>Use an evidence-first workflow</h2>
      <p>A reliable workflow is: observe → describe → inspect events → inspect logs → validate configuration → test the dependency → apply the smallest safe change.</p>
    `
  },
  {
    id: "private-aks-databricks",
    title: "Private AKS to Azure Databricks: Connectivity Considerations",
    category: "Azure",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "images/azure.svg",
    excerpt: "Understand what changes when an AKS workload moves from public exposure to a private cluster.",
    tags: ["Azure", "AKS", "Networking"],
    content: `
      <h2>Public versus private AKS</h2>
      <p>Moving AKS to a private configuration changes how control-plane access and internal network paths are established. It does not automatically mean every application integration must be redesigned.</p>
      <h2>Focus on the actual traffic path</h2>
      <p>For an outbound integration, identify the source subnet, effective route, NAT or firewall path, destination FQDN/IP and the destination-side allowlist. The critical question is which source IP the destination actually sees.</p>
      <pre><code>AKS Pod
  ↓
Node / SNAT
  ↓
NAT Gateway or Firewall
  ↓
Public egress IP
  ↓
Databricks-side allowlist</code></pre>
      <h2>Migration checklist</h2>
      <ul>
        <li>Validate outbound egress IPs.</li>
        <li>Confirm destination allowlisting.</li>
        <li>Check NSG and Azure Firewall rules.</li>
        <li>Validate DNS resolution and routing.</li>
        <li>Test connectivity from the workload, not only from a jump host.</li>
      </ul>
    `
  },
  {
    id: "terraform-best-practices",
    title: "Terraform Best Practices for Enterprise Infrastructure",
    category: "Terraform",
    date: "2026-08-10",
    readTime: "5 min read",
    image: "images/terraform.svg",
    excerpt: "Practical patterns for state, modules, environments, validation and safe infrastructure changes.",
    tags: ["Terraform", "IaC", "DevOps"],
    content: `
      <h2>Keep state controlled</h2>
      <p>Use a remote backend with locking and appropriate access controls. Never treat the Terraform state file as ordinary source code.</p>
      <h2>Build reusable modules</h2>
      <p>Modules should represent meaningful infrastructure boundaries. Keep interfaces small, document variables and outputs, and avoid over-abstracting simple resources.</p>
      <h2>Make plans part of CI/CD</h2>
      <pre><code>terraform fmt -check
terraform validate
terraform plan</code></pre>
      <p>Use pull requests to review plans before applying infrastructure changes, with appropriate approval gates for production.</p>
    `
  },
  {
    id: "aws-eks-architecture",
    title: "AWS EKS Architecture: The Components That Matter",
    category: "AWS",
    date: "2026-08-08",
    readTime: "6 min read",
    image: "images/aws.svg",
    excerpt: "A concise architecture view of EKS networking, nodes, load balancing, IAM and observability.",
    tags: ["AWS", "EKS", "Cloud"],
    content: `
      <h2>Think in layers</h2>
      <p>An EKS platform can be understood through the control plane, worker compute, networking, identity, ingress/load balancing and observability layers.</p>
      <h2>Networking matters most during incidents</h2>
      <p>When an application cannot reach a dependency, verify DNS, route tables, security groups, network ACLs, NAT, load balancers and endpoint policies in the actual traffic direction.</p>
      <h2>Operational principle</h2>
      <p>Document the intended traffic flow before troubleshooting. This makes it easier to distinguish a Kubernetes issue from an AWS networking issue.</p>
    `
  },
  {
    id: "devops-interview-preparation",
    title: "How to Prepare for a DevOps Architect Interview",
    category: "DevOps",
    date: "2026-08-05",
    readTime: "8 min read",
    image: "images/devops.svg",
    excerpt: "A structured preparation framework covering cloud architecture, Kubernetes, IaC, CI/CD, security and SRE.",
    tags: ["DevOps", "Interview", "Architecture"],
    content: `
      <h2>Prepare around scenarios</h2>
      <p>Senior DevOps interviews are usually stronger when answers explain trade-offs rather than only definitions. Prepare scenarios around reliability, scalability, security, cost and migration.</p>
      <h2>Core areas</h2>
      <ul>
        <li>Cloud networking and architecture</li>
        <li>Kubernetes operations</li>
        <li>Terraform and infrastructure lifecycle</li>
        <li>CI/CD and release strategies</li>
        <li>Observability and SRE practices</li>
        <li>Security and DevSecOps</li>
      </ul>
      <h2>Use a structured answer</h2>
      <p>For architecture questions: requirements → constraints → design → failure modes → security → observability → cost → operational model.</p>
    `
  }
];
