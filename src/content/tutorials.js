export const links = [{
  name: '1. Query knowledge graphs with KGTK Kypher',
  description: 'This introduction tutorial gives an overview of the core features of the KGTK Kypher query language.',
  url: 'https://colab.research.google.com/drive/1dQeJSYQwpNdIvC9H00SQ90usiUgu3o1E?usp=sharing',
  image: 'https://raw.githubusercontent.com/usc-isi-i2/kgtk-website/develop/src/images/tutorials/1_kypher.png',
}, {
  name: '2. Knowledge Graph Profiling',
  description: 'The goal of profiling is to produce a summary of the classes, properties and instances present in a KG. Profiling is challenging because it is computationally expensive as the queries touch large parts of the KG. In this of the tutorial, you will learn how to use KGTK to profile a KG, and how KGTK addresses the computational challenges of computing profiles. Along the way, you will learn advanced uses of the KGTK query command. At the end, you will load the profile data in the browsesr so that you can get more insights into the knowledge present in the tutorial KG.',
  url: 'https://colab.research.google.com/drive/1jwq_vVWWwiEa8izA0UZZ_CMK1qIMxBQh?usp=sharing',
  image: 'https://raw.githubusercontent.com/usc-isi-i2/kgtk-website/develop/src/images/tutorials/2_profiling.png',
}, {
  name: '3. Computing Graph Embeddings',
  description: 'In this notebook we will compute graph embeddings using kgtk graph-embeddings command for the arnold subgraph and demonstrate a few applications.',
  url: 'https://colab.research.google.com/drive/1Fl4_5LLEtapOxtVlo57hwpPzEK1gFViL?usp=sharing',
  image: 'https://raw.githubusercontent.com/usc-isi-i2/kgtk-website/develop/src/images/tutorials/3_kge.png',
}, {
  name: '4. Augment A Knowledge Graph Using CSV Files',
  description: 'A common knowledge graph augmentation use case is to integrate structured data present in databases, CSV and Excel files. KGTK provides an alternative to languages such as R2RML (https://www.w3.org/TR/r2rml/) and RML (https://rml.io/specs/rml/) or tools such as Karma (https://github.com/usc-isi-i2/Web-Karma) for integrating tabular data. These languages and tools work by defining a mapping between a structured source and an ontology. KGTK provides capabilities to transform the original structured data into the TSV format used in KGTK to store KGs. This tutorial illustrates the KGTK approach using a CSV file downloaded from Kaggle (https://www.kaggle.com/stefanoleone992/imdb-extensive-dataset) containing information about moves from IMDb (https://www.imdb.com/).',
  url: 'https://colab.research.google.com/drive/1tqKvFTFFQoBCA9GZ5WZPVJhJq5fBem49?usp=sharing',
  image: 'https://raw.githubusercontent.com/usc-isi-i2/kgtk-website/develop/src/images/tutorials/4_csv.png',
}, {
  name: '5. Enriching Wikidata with LOD',
  description: 'The Getty vocabularies contain rich data represented in RDF format. This notebook shows how graphs like Getty Vocabulary can be used to enrich Wikidata by using kgtk operations. We will show this enrichment on the records of people in the Arnold Schwarzenegger graph that exist both in Wikidata (with Qnode) and Getty Vocabulary (with ULAN ID). We will enrich their date of birth information.',
  url: 'https://colab.research.google.com/drive/1vXttxSVtJeSDPlCrpL88G6TGhXdoC3ve?usp=sharing',
  image: 'https://raw.githubusercontent.com/usc-isi-i2/kgtk-website/develop/src/images/tutorials/5_lod.png',
}, {
  name: '6. Network Analysis Using KGTK and graph-tool',
  description: 'In this tutorial you will learn how to do network analysis on a knowledge graph using KGTK and graph-tool (https://graph-tool.skewed.de/), a library for efficient network analysis on large networks. The typical network analysis workflow first extracts a network of interest from a KG, and then applies network analysis tools to the extracted network. KGTK is useful to extract the network as extraction of networks is often an expensive operation on large KGs. KGTK also provides basic, commonly used network analytics (pagerank, connected components, reachability and paths), and can export the networks into the format required by graph-tool, which supports a wide selection onf sophisticated network analytics algorithms (e.g., community detection).',
  url: 'https://colab.research.google.com/drive/1Lat732XpHv1RMswoYsz_wUk_6eKEf8Xt?usp=sharing',
  image: 'https://raw.githubusercontent.com/usc-isi-i2/kgtk-website/develop/src/images/tutorials/6_network.png',
}, {
  name: '7. Constraint validation example',
  description: 'In this notebook we will run a simple constraint validation query against the Arnold KG. We will run on the property P276 (location). This notebooks does the following tasks: 1- Simple query for records of P276, with examples. 2- Type/Value type constraint validation with kgtk queries. 3- Explorarion of an example',
  url: 'https://colab.research.google.com/drive/182ikHCeGDhyPs8WuLQC03c-ET84p0ozM?usp=sharing',
  image: 'https://raw.githubusercontent.com/usc-isi-i2/kgtk-website/develop/src/images/tutorials/7_constraint.png',
}]
