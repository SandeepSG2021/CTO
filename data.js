/* eslint-disable */
// CTO Coach output + machine-usable categories for deviation analysis.
// Edit freely — Tab 1 renders `coachContent`, Tab 2 scores activities against `categories`.

window.COACH_DATA = {
  meta: {
    title: "CTO Readiness Coach",
    subtitle: "From strong technical IC / Enterprise Architect to credible CTO",
    lastUpdated: "2026-07-01"
  },

  // ------------------------------------------------------------------
  // Categories drive Tab 2 scoring. Each activity you log is scanned for
  // `positive` keywords (aligned with the roadmap) and `negative` keywords
  // (behaviors the coach says to STOP). Scores roll up in Tab 3.
  // ------------------------------------------------------------------
  categories: [
    {
      id: "ego",
      name: "Ego Control & Humility",
      phase: "Phase 1",
      description: "Managing overconfidence, pausing before responding, allowing others to be experts.",
      positive: [
        "paused before responding", "asked instead of told", "acknowledged", "credited", "gave credit",
        "listened", "let others lead", "let others speak", "asked for input", "said i don't know",
        "admitted i was wrong", "changed my mind", "invited disagreement", "held back opinion",
        "let the team decide", "deferred", "yielded", "coached", "asked a question first"
      ],
      negative: [
        "interrupted", "cut off", "took over", "dominated", "pushed my recommendation",
        "corrected", "showed off", "proved i was right", "one-upped", "over-explained",
        "went deep technically", "hijacked", "argued", "insisted", "overrode", "shot down"
      ]
    },
    {
      id: "presence",
      name: "Executive Presence",
      phase: "Phase 2",
      description: "Calm authority, gravitas, right depth for the audience, controlled pace.",
      positive: [
        "spoke slowly", "kept it short", "3 bullets", "summarized in a sentence", "stayed calm",
        "controlled tone", "held eye contact", "led the room", "closed the meeting",
        "set the agenda", "framed the decision", "named the tradeoff", "stayed silent when needed"
      ],
      negative: [
        "rambled", "spoke too fast", "too technical for the room", "lost the room",
        "got defensive", "raised my voice", "fidgeted", "over-apologized",
        "talked over an exec", "went too deep with a vp", "went too deep with a cio"
      ]
    },
    {
      id: "communication",
      name: "Communication & Storytelling",
      phase: "Phase 3",
      description: "Translating tech into business outcomes, simple language, vision/risk/value framing.",
      positive: [
        "business outcome", "customer impact", "revenue", "cost", "risk", "roi",
        "told a story", "used an analogy", "one-page", "executive summary", "so what",
        "translated for business", "simplified", "avoided jargon", "framed the value"
      ],
      negative: [
        "dumped slides", "explained the architecture", "went into implementation details",
        "used acronyms", "used jargon", "gave a demo when a summary was needed",
        "no clear ask", "no clear recommendation", "buried the lede"
      ]
    },
    {
      id: "strategy",
      name: "Strategic Leadership",
      phase: "Phase 4",
      description: "Enterprise thinking, operating model, investment, outcomes — not just architecture.",
      positive: [
        "linked to strategy", "3-year view", "portfolio", "operating model", "capability",
        "investment case", "make vs buy", "buy vs build", "north star", "roadmap tradeoff",
        "connected to okr", "connected to business goal", "framed the bet"
      ],
      negative: [
        "solved a ticket", "chose a tool without strategy", "picked tech first",
        "no business linkage", "tactical only", "reacted to a fire without framing"
      ]
    },
    {
      id: "people",
      name: "People Leadership & Scaling",
      phase: "Phase 5",
      description: "Leading through others, delegating, coaching, psychological safety.",
      positive: [
        "delegated", "coached", "1:1", "gave feedback", "asked how i can help",
        "let the team own", "unblocked", "sponsored someone", "mentored", "developed",
        "praised in public", "gave feedback in private", "created safety"
      ],
      negative: [
        "did it myself", "took the pen", "rewrote their work", "micromanaged",
        "criticized in public", "skipped 1:1", "took credit", "solo hero move"
      ]
    },
    {
      id: "influence",
      name: "Influence Without Authority",
      phase: "Phase 6",
      description: "Peers, execs, alliances, politics handled professionally.",
      positive: [
        "pre-wired", "aligned before the meeting", "built a coalition", "sponsored by",
        "found common ground", "reframed", "asked a powerful question",
        "acknowledged their concern", "adopted their language"
      ],
      negative: [
        "won the argument but lost the room", "made an enemy", "went around",
        "escalated without warning", "public disagreement with peer", "ignored politics"
      ]
    },
    {
      id: "brand",
      name: "CTO Brand Building",
      phase: "Phase 7",
      description: "Clarity, vision, calmness, humility — visible and repeated.",
      positive: [
        "external talk", "wrote a post", "shared a pov", "presented to leadership",
        "published", "spoke at forum", "wrote a vision doc", "shared learnings",
        "recognized a team publicly"
      ],
      negative: [
        "invisible this week", "no external visibility", "no vision communicated"
      ]
    },
    {
      id: "learning",
      name: "Learning Mindset (without 'know-it-all')",
      phase: "Cross-cutting",
      description: "Deep learning is your strength — keep it, but don't weaponize it.",
      positive: [
        "learned from someone junior", "asked to be taught", "attended without speaking",
        "read", "studied", "shadowed", "took notes", "asked a curious question"
      ],
      negative: [
        "jumped topics", "chased a new tech without purpose",
        "had to be the expert", "competed on knowledge"
      ]
    }
  ],

  // ------------------------------------------------------------------
  // Full coach output rendered in Tab 1. Structured so we can render as
  // collapsible sections. `bullets` are shown as list items; `text` as paragraph.
  // ------------------------------------------------------------------
  coachContent: [
    {
      heading: "1. Brutally Honest Leadership Assessment",
      subsections: [
        {
          title: "What you are doing well",
          bullets: [
            "You go deep. You test, you experiment, and you form opinions from evidence — this is rare and it is your foundation.",
            "You see pros and cons of solutions faster than most peers, which makes you a strong architect.",
            "You are willing to be uncomfortable to grow — the fact that you asked for this assessment is itself a leadership signal.",
            "You treat people equally regardless of title — the intent is healthy, the execution needs calibration."
          ]
        },
        {
          title: "What is hurting your leadership brand",
          bullets: [
            "You lead through technical depth. At CTO level, depth is table stakes; leadership is measured by clarity, calm, and the quality of decisions others make because of you.",
            "You push your recommendation when the room feels slow. Executives read this as 'he cannot tolerate ambiguity' or 'he needs to win'.",
            "You want to know everything. This signals insecurity, not confidence, to senior leaders.",
            "You jump topics quickly. Peers may see this as unfocused; execs may see this as unable to hold strategy over quarters."
          ]
        },
        {
          title: "What others may be seeing that you may not realize",
          bullets: [
            "Developers see: brilliant, but hard to disagree with. They stop trying after two attempts.",
            "Architects see: sharp, but competitive. They present around you, not with you.",
            "Directors / VPs see: strong SME, unproven leader of leaders.",
            "CIOs / CTOs see: high-potential IC. Not yet a peer.",
            "Business execs see: 'a smart tech guy' — which is a compliment for an architect and a ceiling for a CTO."
          ]
        },
        {
          title: "The gap between your intention and your impact",
          bullets: [
            "Intention: help the org move faster. Impact: people wait for you to speak first.",
            "Intention: prove I can be trusted. Impact: I look like I need to be right.",
            "Intention: treat everyone equally. Impact: I read the room the same way regardless of audience, which is a presence gap, not a values win."
          ]
        }
      ]
    },
    {
      heading: "2. CTO Readiness Gap Analysis",
      subsections: [
        { title: "Executive Presence", bullets: ["Current level: 4/10.", "Risk: peers will keep sponsoring you for architect roles, not CTO roles.", "CTO behavior: fewer words, more weight per word. Calm in ambiguity. Silence is a tool.", "Action: cut your speaking time in exec meetings by 50%. Practice 3-bullet responses."] },
        { title: "Strategic Thinking", bullets: ["Current level: 5/10 — strong on tech, thin on portfolio, capital, and operating model.", "Risk: you will be seen as 'best architect in the room' forever.", "CTO behavior: connects every tech bet to a business outcome, a horizon, and a capital allocation.", "Action: rewrite every recommendation as a 3-line investment case: outcome, cost, risk."] },
        { title: "Business Acumen", bullets: ["Current level: 4/10.", "Risk: business leaders will not invite you to the table where CTO decisions are made.", "CTO behavior: speaks P&L, unit economics, customer segments, competitive posture — fluently.", "Action: read your company's annual report and one competitor's, monthly. Learn the top 5 KPIs the CFO watches."] },
        { title: "Communication & Storytelling", bullets: ["Current level: 4/10 for exec audiences, 8/10 for tech audiences.", "Risk: your ideas will lose to weaker ideas told better.", "CTO behavior: opens with the 'so what', uses one memorable analogy, ends with a clear ask.", "Action: practice the 'BLUF' pattern — Bottom Line Up Front — for every message longer than a paragraph."] },
        { title: "Emotional Intelligence", bullets: ["Current level: 5/10. You feel your own drive strongly and read others less strongly.", "Risk: you will burn quiet allies without knowing it.", "CTO behavior: names the emotion in the room before naming the issue.", "Action: after every meeting, write one line: 'what did the other person feel?'"] },
        { title: "Listening Skills", bullets: ["Current level: 5/10 — you listen for gaps to fill, not for what the person is really saying.", "Risk: people stop bringing you real problems.", "CTO behavior: repeats back what they heard before responding.", "Action: mandate for 30 days — before speaking, summarize the previous speaker in one sentence."] },
        { title: "Influence Without Authority", bullets: ["Current level: 4/10.", "Risk: you will be effective only where you have positional power — a ceiling for CTO.", "CTO behavior: wins the meeting before the meeting. Pre-aligns key stakeholders.", "Action: for every meeting that matters, do 2 pre-wires. No exceptions."] },
        { title: "Ability to Lead Leaders", bullets: ["Current level: 3/10 (mostly IC history).", "Risk: this is the single biggest CTO gate. If you cannot lead leaders, you will not be one.", "CTO behavior: sets direction, removes obstacles, coaches judgment — does not do the work.", "Action: find one leader to develop for 12 months. Measure yourself by their growth, not yours."] },
        { title: "Scaling Through People vs Personal Expertise", bullets: ["Current level: 3/10.", "Risk: you will always be the bottleneck.", "CTO behavior: proud when the team solves it without them.", "Action: every week, delegate one thing you would have done yourself and do not touch it."] },
        { title: "Decision-Making Maturity", bullets: ["Current level: 6/10. You decide fast — sometimes too fast.", "Risk: you will be right often and trusted rarely.", "CTO behavior: distinguishes reversible from irreversible decisions; slows down for the second.", "Action: label every decision Type-1 (irreversible) or Type-2 (reversible). Move slower on Type-1."] },
        { title: "Humility & Learning Mindset", bullets: ["Current level: 5/10 — you learn constantly, but to prove, not to grow.", "Risk: 'I must know everything' will exhaust you and alienate your team.", "CTO behavior: publicly asks the most junior person in the room what they think first.", "Action: once a week, publicly say 'I don't know — who does?'"] },
        { title: "Enterprise Technology Vision", bullets: ["Current level: 5/10.", "Risk: seen as tactical, not visionary.", "CTO behavior: has a 3-year story the entire company can repeat.", "Action: draft your 3-year tech vision on one page. Rewrite it every quarter."] },
        { title: "Board / C-Suite Communication Readiness", bullets: ["Current level: 3/10.", "Risk: you will never be considered until this moves.", "CTO behavior: 3 slides, 10 minutes, business language, invites challenge.", "Action: build a personal 'board-ready update' template and use it monthly with your leader."] }
      ]
    },
    {
      heading: "3. Hard Truths You Need to Accept",
      bullets: [
        "'I must know everything' is not a strength. It is a defense mechanism. At CTO level, it will exhaust you and shrink your team.",
        "Your discomfort when others know more is fear dressed as ambition. The best CTOs hire people who know more and are proud of it.",
        "Pushing your opinion strongly when the room is slow is not leadership — it is impatience. Real leaders make the room faster without dominating it.",
        "Leading through expertise is an IC skill. Leading through influence is an executive skill. You are optimizing the wrong muscle.",
        "You are a better communicator than you think in technical rooms, and worse than you think in executive rooms. Assume the second is true and train for it.",
        "Treating everyone the same is a value, not a strategy. Executive presence requires reading the audience — that is not fake, it is respect.",
        "You are not transitioning from IC to leader by working harder. You transition by doing less, but on higher-leverage things.",
        "Your India-competitive background gave you drive. It also gave you a scoreboard mindset. CTOs do not compete — they orchestrate."
      ]
    },
    {
      heading: "4. Phase-Wise CTO Transformation Plan",
      phases: [
        {
          title: "Phase 1 — Self-Awareness & Ego Control",
          objective: "See yourself the way others see you, and choose your response instead of reacting.",
          behaviorChanges: ["Pause 3 seconds before speaking in any meeting with 5+ people.", "Name your trigger silently before you respond ('I feel challenged', 'I feel unseen').", "Ask one question before making one statement."],
          daily: ["End-of-day reflection: where did ego drive me today?", "One 'I don't know' statement, out loud."],
          weekly: ["Ask one trusted peer: 'where did I dominate this week?'"],
          monthly: ["360 mini-check with 3 people you work with closely."],
          avoid: ["Confusing self-flagellation with self-awareness.", "Journaling without behavior change."],
          success: ["People finish their sentences around you.", "You catch yourself before pushing."]
        },
        {
          title: "Phase 2 — Executive Presence Foundation",
          objective: "Speak less. Weigh more. Match depth to audience.",
          behaviorChanges: ["Default response length: 3 sentences.", "Match technical depth to the most senior person in the room, not the most technical.", "Own silence — do not fill it."],
          daily: ["Record one meeting reflection: pace, tone, depth."],
          weekly: ["One meeting where you speak last, not first."],
          monthly: ["Get one presence-focused feedback from a mentor."],
          avoid: ["Faking calm. It reads worse than being intense.", "Copying someone else's style — build yours."],
          success: ["Execs quote you back to you.", "Fewer follow-up questions because your first answer landed."]
        },
        {
          title: "Phase 3 — Communication & Storytelling",
          objective: "Translate every technical idea into a business narrative in under 60 seconds.",
          behaviorChanges: ["Every doc opens with 'so what' + one clear ask.", "Every recommendation carries outcome, cost, risk, and alternative considered.", "Analogies over acronyms."],
          daily: ["Rewrite one Slack/Teams message into BLUF format before sending."],
          weekly: ["Write one 1-page brief on a current tech topic for a business audience."],
          monthly: ["Present one topic to a non-technical audience and collect feedback."],
          avoid: ["Slides as a crutch.", "'Let me give you some background' — cut it."],
          success: ["Business leaders quote your framing.", "Fewer follow-up meetings to clarify what you meant."]
        },
        {
          title: "Phase 4 — Strategic Leadership Shift",
          objective: "Move from 'best answer in the room' to 'best environment for answers'.",
          behaviorChanges: ["Ask 'what is the business trying to become?' before 'what should we build?'", "Frame every choice as a bet with a horizon.", "Name what you are NOT doing and why."],
          daily: ["Read one business/strategy source (annual report, HBR, sector news)."],
          weekly: ["Update your 1-page 3-year tech vision."],
          monthly: ["Present a strategy view to a business peer for pressure-testing."],
          avoid: ["Confusing roadmap with strategy.", "Strategy documents no one reads."],
          success: ["Business leaders bring strategy questions to you first."]
        },
        {
          title: "Phase 5 — People Leadership & Team Scaling",
          objective: "Be proud when the team solves it without you.",
          behaviorChanges: ["Delegate the thing you most want to do yourself.", "Ask 'how can I help?' before 'here is what I'd do'.", "Do not rewrite others' work — coach it."],
          daily: ["One coaching question to a team member instead of an answer."],
          weekly: ["Never miss a 1:1. Ever."],
          monthly: ["Pick one leader to sponsor for a stretch opportunity."],
          avoid: ["Hero mode.", "Public correction.", "'Just this once I'll do it'."],
          success: ["Your team gets promoted.", "Decisions happen without you and you are okay with it."]
        },
        {
          title: "Phase 6 — CTO-Level Influence",
          objective: "Win the meeting before the meeting. Build coalitions.",
          behaviorChanges: ["Pre-wire every high-stakes decision with 2+ stakeholders.", "Trade small wins for long-term trust.", "Never publicly disagree with a peer — do it privately, first."],
          daily: ["One 15-minute pre-wire or trust-building 1:1."],
          weekly: ["Map your top 10 stakeholders — who is warm, cold, neutral?"],
          monthly: ["Move one stakeholder from neutral to warm."],
          avoid: ["Winning arguments and losing relationships.", "Going around peers to their leaders."],
          success: ["You are copied on decisions before they are made."]
        },
        {
          title: "Phase 7 — CTO Brand Building",
          objective: "Be known — inside and outside — for a clear, calm, business-anchored tech point of view.",
          behaviorChanges: ["Publish a POV monthly (internal or external).", "Speak at one external forum per quarter.", "Repeat your 3-year tech vision until people finish your sentences."],
          daily: ["One micro-share: a note, a comment, a reference."],
          weekly: ["One long-form thought written down."],
          monthly: ["One public artifact — talk, post, panel."],
          avoid: ["Broadcasting without substance.", "Copying thought-leader templates."],
          success: ["People outside your company know what you stand for."]
        }
      ]
    },
    {
      heading: "5. Stop / Start / Continue",
      lists: {
        Stop: [
          "Pushing your recommendation when you feel the room is slow.",
          "Going deep technically with non-technical audiences.",
          "Jumping topics to prove range.",
          "Correcting people in public.",
          "Treating 'I know everything' as a badge.",
          "Filling silence.",
          "Winning arguments with peers."
        ],
        Start: [
          "Asking one question before making one statement.",
          "Pre-wiring every meeting that matters.",
          "Writing every recommendation as outcome / cost / risk / alternative.",
          "Naming Type-1 vs Type-2 decisions.",
          "Delegating one thing per week you would have done yourself.",
          "Sponsoring one leader for a stretch role.",
          "Publishing one POV per month."
        ],
        Continue: [
          "Deep hands-on learning — but for insight, not validation.",
          "Treating people with equal respect — pair it with audience calibration.",
          "Willingness to be uncomfortable to grow.",
          "Fast pattern recognition — use it to shape questions, not to close discussions."
        ]
      }
    },
    {
      heading: "6. Meeting Behavior Coaching",
      audiences: [
        { audience: "Developers", how: "Curious, coaching. Ask before telling. Praise craft. Do not code the solution for them out loud.", depth: "High depth, but only after they lead.", challenge: "Ask 'what did you try, and what did you rule out?'", presence: "Warm, patient, energizing." },
        { audience: "Architects", how: "Peer to peer. Debate ideas, not people. Bring options, not verdicts.", depth: "High.", challenge: "'What is the strongest case against your proposal?'", presence: "Sharp, generous, curious." },
        { audience: "Senior Managers", how: "Outcome-first. Unblock, don't dictate.", depth: "Medium.", challenge: "'What decision do you need from me?'", presence: "Steady, supportive, decisive." },
        { audience: "Directors", how: "Frame the trade-offs. Own the risk conversation.", depth: "Medium-low.", challenge: "'Which of these two are you willing to give up?'", presence: "Calm, structured, confident." },
        { audience: "VPs", how: "Strategy and outcomes. Three bullets. Clear ask.", depth: "Low.", challenge: "'What outcome would make this a win in 12 months?'", presence: "Composed, concise, business-anchored." },
        { audience: "CIOs / CTOs", how: "Peer voice. Vision, portfolio, bets. Share dilemmas, not conclusions.", depth: "Low, unless invited.", challenge: "'How would you tell the board about this?'", presence: "Gravitas. Fewer words. More weight." },
        { audience: "Business Executives", how: "P&L, customer, market. No tech vocabulary. One story, one number, one ask.", depth: "Almost none.", challenge: "'If we do nothing, what happens to the business in 24 months?'", presence: "Calm authority. Warm. Human." }
      ]
    },
    {
      heading: "7. Communication Scripts",
      scripts: [
        { situation: "When you disagree", script: "'I see it differently — can I offer another angle, and then we decide together?'" },
        { situation: "When someone knows more than you", script: "'You clearly have more depth here than I do. Walk me through it — I want to learn before I weigh in.'" },
        { situation: "When you want to challenge a weak idea", script: "'Help me stress-test this — what breaks it at scale, and what would we regret in 12 months?'" },
        { situation: "When the meeting is going off track", script: "'Can we pause? What decision are we trying to make in the next 10 minutes?'" },
        { situation: "When you want to recommend a solution", script: "'My recommendation is X. The outcome is Y, the cost is Z, the main risk is R, and the alternative I considered is A. What am I missing?'" },
        { situation: "When you need to show humility", script: "'I got this wrong last quarter. Here is what I learned and what I would do differently.'" },
        { situation: "When you need to ask a powerful executive question", script: "'If we had to bet the next three years on one thing, what would you bet on — and why not the others?'" },
        { situation: "When you need to avoid sounding arrogant", script: "'That is my instinct — but I would like to hear where I might be wrong before we lock it in.'" }
      ]
    },
    {
      heading: "8. Personal Operating Model",
      operatingModel: {
        "Leadership principles": [
          "Clarity over cleverness.",
          "Calm over speed.",
          "Questions before answers.",
          "Coach the person, decide the outcome.",
          "Strategy is what you say NO to."
        ],
        "Decision rules": [
          "Label every decision Type-1 (irreversible) or Type-2 (reversible).",
          "Type-1: slow down, invite dissent, sleep on it.",
          "Type-2: decide fast, learn faster.",
          "Every decision names: outcome, cost, risk, alternative."
        ],
        "Meeting rules": [
          "Speak in the last third, not the first.",
          "Never more than 3 bullets in an exec setting.",
          "Ask one question before making one statement.",
          "Close every meeting with: decision, owner, date."
        ],
        "Communication rules": [
          "BLUF — Bottom Line Up Front.",
          "One page or less for anything above director.",
          "Analogies over acronyms.",
          "Every message ends with a clear ask."
        ],
        "Learning rules": [
          "Learn to build insight, not to win arguments.",
          "One deep topic per quarter, not one per week.",
          "Learn publicly — share what you learned, credit the source."
        ],
        "Humility rules": [
          "Say 'I don't know' at least once a week, in public.",
          "Ask the most junior person in the room first.",
          "Never correct in public. Coach in private."
        ],
        "Executive presence rules": [
          "Pause 3 seconds before responding to senior leaders.",
          "Match depth to the most senior person, not the most technical.",
          "Own silence."
        ]
      }
    },
    {
      heading: "9. 30-60-90 Day Action Plan",
      periods: [
        {
          window: "Days 1–30 — Awareness",
          focus: ["Ego triggers", "Meeting behavior", "Pause discipline"],
          actions: [
            "Log daily activities in this app.",
            "Pause 3 seconds before responding in every meeting.",
            "Cut speaking time by 30% in exec settings.",
            "Ask one question before making one statement."
          ],
          reflection: [
            "Where did I dominate today and why?",
            "Where did I speak when silence would have been stronger?",
            "Whose voice did I miss today?"
          ],
          mentorAsks: [
            "'Where do I come across as arrogant, and where as confident?'",
            "'What would you cut from how I show up?'"
          ],
          observables: ["Fewer interruptions from you.", "Team members speak longer before you enter."],
          measures: ["Daily log entries.", "One weekly mentor check-in."]
        },
        {
          window: "Days 31–60 — Reshape",
          focus: ["Executive presence", "Communication", "Delegation"],
          actions: [
            "Rewrite every recommendation as outcome/cost/risk/alternative.",
            "Delegate one thing per week and don't touch it.",
            "Pre-wire every high-stakes meeting."
          ],
          reflection: [
            "What did I NOT do this week that a CTO would have delegated?",
            "How many exec messages used BLUF?",
            "Where did I pre-wire and where did I skip?"
          ],
          mentorAsks: [
            "'Which of my messages this month landed with the business?'",
            "'Where do I still lead with tech instead of outcome?'"
          ],
          observables: ["Shorter, sharper written comms.", "Team owning more decisions."],
          measures: ["Weekly delegated items.", "Written brief count."]
        },
        {
          window: "Days 61–90 — Elevate",
          focus: ["Strategic voice", "Influence", "Brand"],
          actions: [
            "Publish 1-page 3-year tech vision.",
            "Sponsor one leader.",
            "Publish one POV externally or internally."
          ],
          reflection: [
            "What did I say NO to this month, and why?",
            "Who moved from neutral to warm because of me?",
            "What am I becoming known for?"
          ],
          mentorAsks: [
            "'Would you sponsor me for a CTO conversation today? What is missing?'"
          ],
          observables: ["Business peers quote your framing.", "You are copied on decisions earlier."],
          measures: ["POVs published.", "Sponsored leader progress."]
        }
      ]
    },
    {
      heading: "10. One-Year CTO Readiness Roadmap",
      months: [
        { m: "Month 1", focus: "Self-awareness, ego control, pause discipline." },
        { m: "Month 2", focus: "Executive presence — pace, depth, silence." },
        { m: "Month 3", focus: "BLUF communication + business framing." },
        { m: "Month 4", focus: "Strategy: 3-year vision v1, capital/portfolio literacy." },
        { m: "Month 5", focus: "People: delegate systematically, coach 2 leaders." },
        { m: "Month 6", focus: "Influence: stakeholder map, pre-wiring habit." },
        { m: "Month 7", focus: "Board-style comms: 3-slide, 10-min updates." },
        { m: "Month 8", focus: "Brand: publish, speak, be visible with substance." },
        { m: "Month 9", focus: "Lead a cross-functional strategic initiative end-to-end." },
        { m: "Month 10", focus: "External CTO peer network — 5 real relationships." },
        { m: "Month 11", focus: "Formal CTO-readiness review with sponsors." },
        { m: "Month 12", focus: "Position for CTO — internal moves or external search." }
      ]
    },
    {
      heading: "11. Accountability System",
      accountability: {
        "Daily self-check": [
          "Where did I pause today?",
          "Where did I push when I should have asked?",
          "Whose voice did I miss?",
          "What did I delegate?",
          "Did I speak in business outcomes?"
        ],
        "Weekly reflection": [
          "Top 3 wins that were not about my expertise.",
          "Top 3 moments ego showed up.",
          "One person I sponsored.",
          "One meeting where silence beat speech.",
          "One POV I shared."
        ],
        "Monthly mentor questions": [
          "Where did I grow?",
          "Where am I still an IC?",
          "What would you tell me if you were being brutal?",
          "Am I closer to CTO-ready than last month? Evidence?"
        ],
        "Meeting self-assessment": [
          "Did I speak in the first third? (bad)",
          "Was my depth calibrated to the audience?",
          "Did I ask more than I told?",
          "Did I close with decision, owner, date?"
        ],
        "Executive presence scorecard (1–5 each)": [
          "Calm", "Concise", "Confident without dominating", "Read the room", "Owned silence"
        ],
        "Ego-control scorecard (1–5 each)": [
          "Paused", "Deferred", "Credited others", "Asked before telling", "Let others lead"
        ],
        "Communication scorecard (1–5 each)": [
          "BLUF", "Business framing", "One clear ask", "No jargon", "Analogy used"
        ]
      }
    },
    {
      heading: "12. Final Direct Advice",
      finalAdvice: {
        mindsetShift: "Stop trying to be the smartest person in the room. Start being the reason the room is smart.",
        biggestRisk: "You will plateau as a brilliant enterprise architect who is 'almost a CTO' — for the next 10 years.",
        strongestAsset: "You learn deeply and you are willing to be uncomfortable. Very few leaders have both.",
        oneSentence: "Lead with questions, decide with clarity, communicate in outcomes, and let the team be the hero."
      }
    }
  ],

  // ------------------------------------------------------------------
  // Weekly reflection questions — Tab 3 rotates one set per ISO week.
  // ------------------------------------------------------------------
  weeklyReflectionSets: [
    [
      "Where did my ego show up this week, and what triggered it?",
      "Which meeting would I run differently if I did it again?",
      "Who did I sponsor or coach this week — and what did they gain?",
      "Where did I speak in business outcomes vs technical depth?",
      "What did I say NO to this week, and why?"
    ],
    [
      "Which of my Type-1 decisions did I rush?",
      "Where did I fill silence instead of owning it?",
      "Who moved from neutral to warm because of me?",
      "What did I delegate that I would have done a month ago?",
      "What POV did I share publicly this week?"
    ],
    [
      "When did I 'need to be right' this week?",
      "Which junior voice did I amplify?",
      "Which exec message landed — and which missed?",
      "Where did I lead with expertise instead of influence?",
      "What would my mentor say I still need to change?"
    ],
    [
      "Where was my pace too fast for the room?",
      "Which pre-wire did I skip and pay for?",
      "What did I learn from someone junior to me?",
      "Where did I coach instead of correct?",
      "What did I add to my 3-year tech vision?"
    ]
  ]
};
