



<h1>In the Shadow of the Monolith</h1>

<div style="border-bottom: 1px solid black; margin-top: 0; padding-bottom: 10px;"></div>

With TikTok's fate in the hands of politicians, many U.S. users find themselves in shambles. For some, it feels like losing a drug—an instant hit of dopamine. For others, it’s the loss of a connection to an audience they were seemingly born to entertain. Yet, despite this perceived dependency on the app, there hasn’t been a significant collective fight from American users to keep TikTok. 

While politicians debate the potential security risks—focusing not on the secret agent already invited into their bed or the hacker phishing with automated messages—but on the data shared by devices on the same bandwidth, the public’s distrust of TikTok seems rooted in something far more visceral: an unnervingly accurate algorithm. It’s an algorithm so precise that it has made users feel, at least once, as though they were being spied on—devices aside, lives exposed.

The American public is rarely receptive to government overreach—whether it’s parenting from the left or the right. Yet, as a group, there hasn’t been a significant uproar about being “protected” from TikTok. With most Americans' data already accessible via a little digital mining, and their general distrust of “daddy-government,” TikTok seems to trigger something deeper: paranoia. The algorithm doesn’t just tailor content; it **tailors too well**.

_Is the mic still on when I’m not using the app?__Check the settings. Check the settings again.__How did it know? Wait, I didn’t even say it out loud—is my camera still on?__I shouldn’t have used that Manga AI filter._

There’s no uncanny valley on TikTok’s **For You Page**. The real-time recommendations are so fast, so eerily accurate, it feels like someone—not something—is watching you.

But it’s not someone. It’s **Monolith**.

One of the key technologies behind TikTok’s success, **Monolith**, was developed by ByteDance (TikTok’s parent company) to power the real-time recommendations on the For You Page. It’s responsible for the addictive, highly-personalized suggestions that hook users.

Monolith is built to handle massive amounts of user data without the typical pitfalls of data storage and retrieval. It’s designed to produce lightning-fast recommendations based on user behavior: what you watch, like, or interact with. At its core is the **collisionless embedding table**—a hash table on steroids. This ensures data isn’t confused between users or videos by assigning every tiny piece of information its own unique space. The system converts complex information, like preferences, into numerical patterns it uses to detect trends and make predictions.

The system’s speed comes from **expirable embeddings**, which discard outdated or less relevant data over time. **Frequency filtering** focuses the system on significant and timely data, optimizing both space and efficiency. Monolith’s real-time learning capabilities allow it to continuously update its model with incoming data, adapting swiftly to user behavior.

In essence, TikTok’s seemingly personalized spy is nothing more than **AI combined with an exceptionally efficient hash table**—designed to unload the unnecessary and keep only what matters most to you.

For more details about Monolith, you can read from the engineers behind it here: [https://arxiv.org/abs/2209.07663](https://arxiv.org/abs/2209.07663).

  

### **TikTok’s Tech Stack**

Before Monolith, before TikTok, there was **Musical.ly**. It was more reliant on **human intelligence**—the kind of human curation we assume is watching over our shoulder—than the eerie precision of today’s algorithms. Musical.ly worked off basic social media principles like **hashtags, challenges, and manual curation** for content discovery. Its tech stack was simple, built on **basic client-server architecture** to handle user uploads and interactions.

It was **pre-machine learning**, and recommendations were far from personal. Users saw what was globally popular or tagged with trending hashtags. The app relied on native development frameworks like **Objective-C/Swift** for iOS and **Java** for Android. The magic was in the lip-syncing and editing tools, not the algorithm.

Everything changed in **2017** when ByteDance acquired Musical.ly, merged it with **Douyin** (ByteDance’s Chinese short video app), and rebranded it as TikTok. ByteDance took Musical.ly’s basic discovery algorithms and evolved them into the sophisticated, highly personalized recommendation engine we know today—powered by **AI** and tools like **Monolith**. With ByteDance’s tech expertise, TikTok scaled rapidly, adapting to diverse audiences across the globe.

  

- - -

  

### **Monolith: The Algorithm That’s Anything But Static**

Though monoliths are typically heavy and unmoving, TikTok’s **Monolith** is alive—a constantly evolving algorithm working behind the scenes.

Monolith isn’t a flashy “front-facing” part of TikTok but an **essential component of its backend infrastructure**, holding everything together. It acts as the **binder** for TikTok’s **data infrastructure**, bridging the gap between raw user data and the AI models that interpret it.

Monolith integrates with tools like:

*   **Kafka**: Processing real-time streams of user activity, like likes and video views.
    
*   **Hadoop/Spark**: Managing massive offline datasets to train recommendation models.
    
*   **Redis**: Caching frequently accessed data for speed.
    

At its core, **Monolith powers TikTok’s recommendations** by converting complex user data into a language the AI models can understand. TikTok’s web and mobile apps (built using **React Native** for cross-platform compatibility) rely on API calls to Monolith-powered backend services to deliver the hyper-personalized For You Page experience.


by Arron Alsop
