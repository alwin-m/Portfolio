# SCREAM — Canonical Project History, Architecture & Technical Context

**Project Name:** SCREAM  
**Spelling:** S-C-R-E-A-M  
**Creators:** Alwin Madhu & Nejin Bejoy  
**Status:** Active Independent Open-Source Project  
**Origin Period:** 2024–2025 (College Minor Project)  
**Evolution Period:** 2025–2026 (Mobile P2P & Offline-First Architecture)

---

## 1. Project Narrative & Canonical Story

SCREAM began in 2024 as a college minor project created by Alwin Madhu and Nejin Bejoy. The first version was developed using PHP and HTML because of the technical and academic requirements of the college project. At that time, SCREAM was a conventional web-based social platform, but the idea behind it was already larger than the implementation.

From the beginning, we were interested in the possibility of creating a social platform that would not be completely dependent on conventional Internet infrastructure. We imagined a system where nearby mobile devices could communicate directly with each other and where social communication could potentially continue even when conventional Internet connectivity was unavailable.

At the time, limitations in our technical knowledge and the requirements of the college project meant that we could not fully implement that idea. The PHP/HTML application therefore became the first stage of SCREAM.

As our technical knowledge developed during 2025 and early 2026, we began reconsidering the architecture. In May 2026, during my birthday month, I personally began transforming the original SCREAM project into a mobile APK/application. This was more than simply converting a website into a mobile package. The objective was to explore a new architecture based around mobile devices, local communication, offline operation, and peer-to-peer networking. The first mobile implementation was built and experimentally tested before the 2026 New Delhi student protests became part of our real-world observations.

Later, we monitored the student protests in New Delhi and the communication conditions surrounding them. These events did not inspire SCREAM, did not create its offline/P2P concept, and did not cause us to convert the project into a mobile application. The mobile transition was already underway. Instead, the New Delhi events became another real-world situation through which we could examine the communication-resilience problem that SCREAM had already been exploring.

We also continued observing situations around the world where conventional communication infrastructure can become unreliable or unavailable, including conflict-affected regions, disasters, infrastructure failures, and other large-scale emergencies. These observations were not about taking a political position. They helped us understand the practical environments in which resilient communication technologies could potentially become useful.

Through this process, SCREAM evolved from a college PHP/HTML web project into an experimental mobile, offline-first, peer-to-peer social networking platform. The project's central question became much broader than the original academic assignment:

**How can people continue to communicate, share information, and maintain a social network when conventional Internet connectivity is unavailable or unreliable?**

SCREAM is not designed for one particular protest, country, conflict, or political situation. It is an exploration of a technological possibility: creating a social networking experience that can use conventional Internet infrastructure when it is available while also exploring local peer-to-peer communication when it is not.

The long-term vision is to make communication more resilient without making the technology more complicated for the user. The goal is to combine the familiarity of a modern social network with the possibilities of mobile peer-to-peer and offline-first communication.

What began in 2024 as a college minor project has therefore become an ongoing exploration of mobile computing, distributed systems, peer-to-peer networking, offline-first architecture, data synchronization, and resilient communication.

SCREAM started as a social-media project. It evolved into an experiment in what social communication could look like when the Internet is no longer the only path between people.

---

## 2. Chronological Timeline

```
2024 — Project Begins
│  Alwin Madhu and Nejin Bejoy create SCREAM as a college minor project.
│  Technology: PHP + HTML
│  Type: Web application
▼
2024–2025 — Web Development
│  The original SCREAM application is developed and tested as a conventional server-based social platform.
│  The concept of eventually creating a more independent communication architecture already exists.
▼
2025–Early 2026 — Architectural Research
│  The project begins moving conceptually beyond the original web architecture.
│  Research and experimentation focus on mobile development, offline communication, local networking, and peer-to-peer technologies.
▼
May 2026 — Mobile APK Development
│  During my birthday month, I personally begin transforming SCREAM into a mobile application/APK.
│  The first mobile implementation is developed and experimentally tested.
│  The project begins moving toward a mobile and P2P architecture.
▼
2026 — New Delhi Student Protests & Global Observation
│  We monitor the student protests in New Delhi and communication conditions globally.
│  These events do not inspire or originate SCREAM.
│  They become a real-world context for examining the communication-resilience problem already being explored.
▼
2026 — Continued Development
│  SCREAM continues evolving toward an offline-first, peer-to-peer social networking platform.
```

---

## 3. Core Technical Architecture

### Architectural Shift

```
[SCREAM v1 (2024-2025)]
User A  ──>  Internet / Web Server (PHP + MySQL)  ──>  User B

[SCREAM Current (2025-2026)]
User A  ──>  Mobile Device (BLE / Wi-Fi Direct Mesh)  ──>  User B
```

### Key Technical Highlights
- **Offline-First Storage:** Local database caching allows reading, writing, and queueing posts/messages offline.
- **Peer Discovery & Mesh Routing:** Nearby devices automatically discover each other using Bluetooth Low Energy (BLE) and Wi-Fi Direct to form ad-hoc mesh networks.
- **End-to-End Encryption (E2EE):** Messages are encrypted locally on the sender's device and decrypted only by the target recipient.
- **Decentralized Social Feed:** User profiles, posts, and thread replies propagate across peer nodes without requiring central validation.

---

## 4. SEO & Canonical Metadata

### Primary Keywords
- SCREAM
- SCREAM social network
- SCREAM offline social network
- peer-to-peer social network
- offline social media
- offline-first social network
- decentralized social network
- P2P social networking
- peer-to-peer communication
- offline messaging
- Internet-independent communication
- decentralized communication
- mobile P2P application

### Standard Project Summary
> SCREAM is an open-source, offline-first social networking project that evolved from a PHP and HTML college web application into a mobile peer-to-peer communication platform designed to explore decentralized, Internet-independent social networking.
