/**
 * ==========================================
 * DATA FILE: GROUP 3 (Middle School) - FULL YEAR
 * Classes: 6, 7, 8
 * Theme: Pro & Academic (Slate/Indigo)
 * Structure: 5 Units (Complete NCERT Syllabus)
 * ==========================================
 */

window.SchoolData = window.SchoolData || {};

window.SchoolData.group3 = {
    id: "group3",
    title: "कक्षा 6 - 8 (Middle)",
    subtitle: "सिद्धांत: तर्क और विज्ञान (Full Year)",
    theme: "theme-pro",
    subjects: {

        // ================= MATHEMATICS (गणित) =================
        math: {
            id: "math",
            name: "गणित (Maths)",
            icon: "fa-calculator",
            color: "#4F46E5", // Indigo
            units: {
                unit1: {
                    title: "यूनिट 1: संख्या पद्धति (Number System)",
                    duration: "April - May",
                    desc: "Integers to Rationals",
                    mapping: {
                        c6: ["अपनी संख्याओं की जानकारी", "पूर्ण संख्याएँ (Whole Nos)", "पूर्णांक (Integers)"],
                        c7: ["पूर्णांक (गुणा-भाग)", "भिन्न और दशमलव", "परिमेय संख्याएँ (Intro)"],
                        c8: ["परिमेय संख्याएँ (Properties)", "वर्ग और वर्गमूल", "घन और घनमूल"]
                    },
                    days: [
                        {
                            day: "Day 1-5",
                            topic: "पूर्णांक और परिमेय (Integers)",
                            board: "Integers (Z): ...-2, -1, 0, 1, 2...\n(-) x (-) = (+)",
                            c6: "संख्या रेखा (Number Line) पर पूर्णांक।",
                            c7: "पूर्णांकों के गुण (Commutative, Associative)।",
                            c8: "परिमेय संख्याओं के गुणधर्म (Closure, Distributivity)।"
                        },
                        {
                            day: "Day 6-12",
                            topic: "वर्ग और घन (Powers)",
                            board: "Square: 5² = 25\nCube: 2³ = 8",
                            c6: "गुणनखंड और गुणज (L.C.M/H.C.F)।",
                            c7: "घातांक और घात (Exponents)।",
                            c8: "वर्गमूल (Division Method) और घनमूल।"
                        }
                    ]
                },
                unit2: {
                    title: "यूनिट 2: बीजगणित (Algebra)",
                    duration: "July - August",
                    desc: "Variables & Linear Equations",
                    mapping: {
                        c6: ["बीजगणित परिचय (Variable x)", "चर का प्रयोग"],
                        c7: ["बीजीय व्यंजक (Terms, Factors)", "सरल समीकरण"],
                        c8: ["एक चर वाले रैखिक समीकरण", "बीजीय व्यंजक और सर्वसमिकाएँ"]
                    },
                    days: [
                        {
                            day: "Day 1-8",
                            topic: "चर और व्यंजक (Expressions)",
                            board: "Term: 5xy | Coeff: 5\nVariable: x, y",
                            c6: "माचिस की तीलियों से पैटर्न (2n)।",
                            c7: "सजातीय और विजातीय पद (Like/Unlike Terms)।",
                            c8: "एकपदी, द्विपदी और बहुपद (Monomial, Binomial)।"
                        },
                        {
                            day: "Day 9-15",
                            topic: "समीकरण हल करना (Equations)",
                            board: "LHS = RHS\n2x + 3 = 7 => 2x = 4",
                            c6: "समीकरण क्या है? (तराजू का नियम)।",
                            c7: "सरल समीकरण का हल (Transposition Method)।",
                            c8: "शाब्दिक प्रश्न (Age Problems, Numbers Problems)।"
                        }
                    ]
                },
                unit3: {
                    title: "यूनिट 3: ज्यामिति (Geometry)",
                    duration: "Sept - Oct",
                    desc: "Lines, Angles & Shapes",
                    mapping: {
                        c6: ["आधारभूत ज्यामिति", "प्रारंभिक आकारों को समझना"],
                        c7: ["रेखा और कोण", "त्रिभुज और उसके गुण"],
                        c8: ["चतुर्भुजों को समझना", "प्रायोगिक ज्यामिति"]
                    },
                    days: [
                        {
                            day: "Day 1-8",
                            topic: "रेखा और कोण (Angles)",
                            board: "Comp: 90° | Supp: 180°\nTransversal Line",
                            c6: "बिंदु, रेखा, किरण और कोणों के प्रकार।",
                            c7: "पूरक, संपूरक और शीर्षाभिमुख कोण।",
                            c8: "बहुभुज (Polygon) के अंतः कोणों का योग (n-2)x180।"
                        },
                        {
                            day: "Day 9-15",
                            topic: "त्रिभुज और चतुर्भुज",
                            board: "Pythagoras: H² = P² + B²\nParallelogram Props",
                            c6: "त्रिभुज और चतुर्भुज का वर्गीकरण।",
                            c7: "पाइथागोरस प्रमेय और त्रिभुज की असमिका।",
                            c8: "समांतर चतुर्भुज, समचतुर्भुज के गुण और रचना।"
                        }
                    ]
                },
                unit4: {
                    title: "यूनिट 4: क्षेत्रमिति और तुलना (Applied Math)",
                    duration: "Nov - Dec",
                    desc: "Mensuration & Comparing Quantities",
                    mapping: {
                        c6: ["क्षेत्रमिति (परिमाप/क्षेत्रफल)", "अनुपात और समानुपात"],
                        c7: ["राशियों की तुलना (%, लाभ-हानि)", "परिमाप और क्षेत्रफल"],
                        c8: ["राशियों की तुलना (CI, Tax)", "क्षेत्रमिति (3D Volume)"]
                    },
                    days: [
                        {
                            day: "Day 1-10",
                            topic: "क्षेत्रमिति (Mensuration)",
                            board: "Circle Area = πr²\nCuboid Vol = L x B x H",
                            c6: "आयत और वर्ग का परिमाप।",
                            c7: "वृत्त की परिधि और क्षेत्रफल।",
                            c8: "समलम्ब (Trapezium) का क्षेत्रफल और घन का आयतन।"
                        },
                        {
                            day: "Day 11-20",
                            topic: "राशियों की तुलना",
                            board: "Profit% = (P/CP) x 100\nAmount = P(1 + R/100)ⁿ",
                            c6: "अनुपात (Ratio) और ऐकिक नियम।",
                            c7: "प्रतिशत और साधारण ब्याज (SI)।",
                            c8: "चक्रवृद्धि ब्याज (Compound Interest) और बट्टा।"
                        }
                    ]
                },
                unit5: {
                    title: "यूनिट 5: आँकड़े और ग्राफ (Data Handling)",
                    duration: "Jan - Feb",
                    desc: "Statistics & Graphs",
                    mapping: {
                        c6: ["आँकड़ों का प्रबंधन (Bar Graph)", "पिक्टोग्राफ"],
                        c7: ["आँकड़ों का प्रबंधन (Mean/Median)", "संभावना (Probability)"],
                        c8: ["आँकड़ों का प्रबंधन (Histogram)", "आलेखों से परिचय"]
                    },
                    days: [
                        {
                            day: "Day 1-10",
                            topic: "ग्राफ और प्रायिकता",
                            board: "Mean = Sum/Total\nProbability = Favourable/Total",
                            c6: "दंड आलेख (Bar Graph) बनाना।",
                            c7: "माध्य, माध्यिका, बहुलक (Mean, Median, Mode)।",
                            c8: "आयत चित्र (Histogram) और पाई चार्ट (Pie Chart)।"
                        }
                    ]
                }
            }
        },

        // ================= SCIENCE (विज्ञान) =================
        science: {
            id: "science",
            name: "विज्ञान (Science)",
            icon: "fa-atom",
            color: "#00897B", // Teal
            units: {
                unit1: {
                    title: "यूनिट 1: जीव विज्ञान - पोषण (Biology I)",
                    duration: "April - May",
                    desc: "Food & Organisms",
                    mapping: {
                        c6: ["भोजन: यह कहाँ से आता है", "भोजन के घटक", "सजीव और परिवेश"],
                        c7: ["पादपों में पोषण", "प्राणियों में पोषण", "जीवों में श्वसन"],
                        c8: ["फसल उत्पादन एवं प्रबंधन", "सूक्ष्मजीव: मित्र एवं शत्रु", "कोशिका (Intro)"]
                    },
                    days: [
                        {
                            day: "Day 1-5",
                            topic: "पोषण (Nutrition)",
                            board: "Photosynthesis: CO₂ + H₂O → Food\nAmoeba: Pseudopodia",
                            c6: "भोजन के पोषक तत्व (Vitamins, Proteins)।",
                            c7: "प्रकाश संश्लेषण और मानव पाचन तंत्र।",
                            c8: "कृषि पद्धतियाँ और सिंचाई के तरीके।"
                        },
                        {
                            day: "Day 6-10",
                            topic: "सूक्ष्मजीव और कोशिका",
                            board: "Cell: Basic unit of life\nMicrobes: Bacteria, Virus",
                            c6: "सजीवों के लक्षण (Growth, Breathing)।",
                            c7: "श्वसन (Aerobic vs Anaerobic)।",
                            c8: "सूक्ष्मजीवों के उपयोग (Curd, Antibiotics) और हानियाँ।"
                        }
                    ]
                },
                unit2: {
                    title: "यूनिट 2: रसायन विज्ञान (Chemistry)",
                    duration: "July - August",
                    desc: "Matter & Materials",
                    mapping: {
                        c6: ["तंतु से वस्त्र तक", "पदार्थों के समूह", "पदार्थों का पृथक्करण"],
                        c7: ["रेशों से वस्त्र तक", "अम्ल, क्षारक और लवण", "भौतिक/रासायनिक परिवर्तन"],
                        c8: ["संश्लेषित रेशे और प्लास्टिक", "पदार्थ: धातु और अधातु", "कोयला और पेट्रोलियम"]
                    },
                    days: [
                        {
                            day: "Day 1-8",
                            topic: "पदार्थ और रेशे (Materials)",
                            board: "Natural: Cotton, Wool\nSynthetic: Nylon, Rayon",
                            c6: "कपास और जूट से कपड़ा बनाना।",
                            c7: "ऊन और रेशम का जीवन चक्र।",
                            c8: "प्लास्टिक के प्रकार (Thermoplastic vs Thermosetting)।"
                        },
                        {
                            day: "Day 9-15",
                            topic: "अम्ल, क्षार और धातु",
                            board: "Acid: Sour (H+)\nBase: Bitter (OH-)\nMetal + Acid -> H₂ Gas",
                            c6: "विलये और अविलेय पदार्थ। पृथक्करण विधियाँ।",
                            c7: "उदासीनीकरण (Neutralization) अभिक्रिया।",
                            c8: "धातु और अधातु के रासायनिक गुण (Reaction with O₂, H₂O)।"
                        }
                    ]
                },
                unit3: {
                    title: "यूनिट 3: भौतिकी - बल और गति (Physics I)",
                    duration: "Sept - Oct",
                    desc: "Motion, Force & Pressure",
                    mapping: {
                        c6: ["गति एवं दूरियों का मापन", "बल (Intro)"],
                        c7: ["गति एवं समय", "ऊष्मा (Heat)"],
                        c8: ["बल तथा दाब", "घर्षण (Friction)", "ध्वनि (Sound)"]
                    },
                    days: [
                        {
                            day: "Day 1-8",
                            topic: "गति और बल (Motion)",
                            board: "Speed = Dist / Time\nForce = Push or Pull",
                            c6: "SI मात्रक (Meter, Second) और गति के प्रकार।",
                            c7: "दूरी-समय ग्राफ और चाल मापना।",
                            c8: "संपर्क और असंपर्क बल। दाब (Pressure = Force/Area)।"
                        },
                        {
                            day: "Day 9-15",
                            topic: "ऊष्मा और ध्वनि",
                            board: "Heat: Conduction, Convection\nSound needs medium",
                            c6: "मापन की त्रुटियाँ।",
                            c7: "थर्मामीटर और ऊष्मा स्थानांतरण।",
                            c8: "घर्षण (मित्र या शत्रु?) और ध्वनि का संचरण।"
                        }
                    ]
                },
                unit4: {
                    title: "यूनिट 4: भौतिकी - प्रकाश और विद्युत (Physics II)",
                    duration: "Nov - Dec",
                    desc: "Light, Current & Nature",
                    mapping: {
                        c6: ["प्रकाश, छायाएँ एवं परावर्तन", "विद्युत तथा परिपथ"],
                        c7: ["प्रकाश (Lens/Mirror)", "विद्युत धारा और प्रभाव", "पवन और तूफान"],
                        c8: ["प्रकाश (Human Eye)", "विद्युत धारा के रासायनिक प्रभाव", "कुछ प्राकृतिक परिघटनाएँ"]
                    },
                    days: [
                        {
                            day: "Day 1-10",
                            topic: "विद्युत (Electricity)",
                            board: "Circuit: Closed path\nElectroplating: Coating metal",
                            c6: "सेल, बल्ब और स्विच। सुचालक/कुचालक।",
                            c7: "विद्युत चुंबक और फ्यूज (Fuse)।",
                            c8: "विद्युत लेपन (Electroplating) और LED।"
                        },
                        {
                            day: "Day 11-20",
                            topic: "प्रकाश (Light)",
                            board: "Reflection: Laws (∠i = ∠r)\nLens: Convex/Concave",
                            c6: "पिनहोल कैमरा और परछाई।",
                            c7: "गोलीय दर्पण और लेंस से प्रतिबिंब।",
                            c8: "परावर्तन के नियम, मानव नेत्र और ब्रेल लिपि।"
                        }
                    ]
                },
                unit5: {
                    title: "यूनिट 5: पर्यावरण और जनन (Biology II)",
                    duration: "Jan - Feb",
                    desc: "Reproduction & Environment",
                    mapping: {
                        c6: ["कचरा प्रबंधन", "वायु और जल"],
                        c7: ["पादप में जनन", "वन: हमारी जीवन रेखा", "अपशिष्ट जल"],
                        c8: ["जंतुओं में जनन", "किशोरावस्था", "दहन और ज्वाला"]
                    },
                    days: [
                        {
                            day: "Day 1-10",
                            topic: "जनन (Reproduction)",
                            board: "Flower: Stamen & Pistil\nHuman: Sperm & Ovum",
                            c6: "वायु के घटक और जल चक्र।",
                            c7: "परागण (Pollination) और बीजों का प्रकीर्णन।",
                            c8: "लैंगिक/अलैंगिक जनन और कायांतरण (Metamorphosis)।"
                        },
                        {
                            day: "Day 11-15",
                            topic: "पर्यावरण (Environment)",
                            board: "3R: Reduce, Reuse, Recycle\nGlobal Warming",
                            c6: "वर्मीकंपोस्टिंग (केंचुए से खाद)।",
                            c7: "वनों का महत्व और जल उपचार।",
                            c8: "प्रदूषण, ग्रीनहाउस प्रभाव और ओजोन परत।"
                        }
                    ]
                }
            }
        },

        // ================= ENGLISH GRAMMAR =================
        eng_grammar: {
            id: "eng_grammar",
            name: "English Grammar",
            icon: "fa-comments",
            color: "#4338CA", // Deep Blue
            units: {
                unit1: {
                    title: "Unit 1: The Foundation",
                    duration: "April - May",
                    desc: "Parts of Speech I",
                    mapping: {
                        c6: ["Nouns (Types), Pronouns", "Articles", "Adjectives"],
                        c7: ["Sentences (Types)", "Nouns (Number/Gender)", "Determiners"],
                        c8: ["Phrases & Clauses", "Order of Words", "Relative Pronouns"]
                    },
                    days: [
                        { day: "Day 1-5", topic: "Nouns & Sentences", board: "Proper: India | Common: Country", c6: "Abstract & Collective Nouns.", c7: "Rearranging Jumbled Sentences.", c8: "Noun Clause & Adjective Clause." }
                    ]
                },
                unit2: {
                    title: "Unit 2: Verbs & Tenses",
                    duration: "July - August",
                    desc: "Time of Action",
                    mapping: {
                        c6: ["Verbs (Main/Helping)", "Simple Tenses"],
                        c7: ["Transitive/Intransitive", "Continuous Tenses"],
                        c8: ["Finite/Non-Finite", "Perfect & Perf. Cont. Tenses"]
                    },
                    days: [
                        { day: "Day 1-10", topic: "Tenses", board: "Sub + V2 (Past Simple)\nSub + had + V3 (Past Perfect)", c6: "Simple Present/Past usage.", c7: "Present Perfect vs Past Simple.", c8: "Future Perfect Tense." }
                    ]
                },
                unit3: {
                    title: "Unit 3: Voice & Speech",
                    duration: "Sept - Oct",
                    desc: "Advanced Structure",
                    mapping: {
                        c6: ["Active/Passive (Intro)", "Adverbs"],
                        c7: ["Active/Passive (Tenses)", "Direct/Indirect (Intro)"],
                        c8: ["Active/Passive (Advanced)", "Reported Speech (All types)"]
                    },
                    days: [
                        { day: "Day 1-10", topic: "Voice Change", board: "Ram eats (Active) -> Eaten by Ram (Passive)", c6: "Adverbs of Manner/Time.", c7: "Passive of Simple Tenses.", c8: "Passive of Modals & Imperatives." }
                    ]
                },
                unit4: {
                    title: "Unit 4: Modals & Connectors",
                    duration: "Nov - Dec",
                    desc: "Modifying Meaning",
                    mapping: {
                        c6: ["Prepositions", "Conjunctions (And/But)"],
                        c7: ["Modals (Can/May)", "Conjunctions (Because/So)"],
                        c8: ["Modals (Ought/Dare)", "Complex Prepositions"]
                    },
                    days: [
                        { day: "Day 1-8", topic: "Modals", board: "Can: Ability | May: Permission", c6: "Prepositions of Place (In, On, At).", c7: "Usage of Can, Could, Should.", c8: "Synthesizing sentences using conjunctions." }
                    ]
                },
                unit5: {
                    title: "Unit 5: Composition & Vocab",
                    duration: "Jan - Feb",
                    desc: "Writing Skills",
                    mapping: {
                        c6: ["Story, Letter (Informal)", "Synonyms/Antonyms"],
                        c7: ["Notice, Message, Diary", "Homophones"],
                        c8: ["Essay, Report, Formal Letter", "Idioms & Phrases"]
                    },
                    days: [
                        { day: "Day 1-10", topic: "Writing", board: "Format: Sender Add -> Date -> Receiver", c6: "Paragraph Writing.", c7: "Notice Writing format.", c8: "Letter to Editor / Application." }
                    ]
                }
            }
        },

        // ================= HINDI GRAMMAR (हिंदी व्याकरण) =================
        hindi_grammar: {
            id: "hindi_grammar",
            name: "हिंदी व्याकरण",
            icon: "fa-feather-alt",
            color: "#C2185B", // Maroon
            units: {
                unit1: {
                    title: "यूनिट 1: भाषा और वर्ण",
                    duration: "April - May",
                    desc: "Phonology & Basics",
                    mapping: {
                        c6: ["भाषा, लिपि, व्याकरण", "वर्ण विचार"],
                        c7: ["वर्ण (उच्चारण)", "वर्तनी (Spelling)"],
                        c8: ["हिंदी भाषा का इतिहास", "संधि (स्वर)"]
                    },
                    days: [
                        { day: "Day 1-5", topic: "वर्ण और संधि", board: "संधि: विद्या + आलय = विद्यालय", c6: "स्वर और व्यंजन के भेद।", c7: "उच्चारण स्थान (कंठ, तालु)।", c8: "दीर्घ, गुण और वृद्धि संधि।" }
                    ]
                },
                unit2: {
                    title: "यूनिट 2: शब्द विचार (विकारी)",
                    duration: "July - August",
                    desc: "Nouns & Pronouns",
                    mapping: {
                        c6: ["संज्ञा, लिंग, वचन", "सर्वनाम"],
                        c7: ["संज्ञा के विकार (कारक)", "सर्वनाम के भेद"],
                        c8: ["पद परिचय", "कारक (विस्तृत)"]
                    },
                    days: [
                        { day: "Day 1-8", topic: "संज्ञा और कारक", board: "कर्ता ने, कर्म को...", c6: "संज्ञा के 3 भेद।", c7: "सर्वनाम के 6 भेद।", c8: "संप्रदान और अपादान कारक में अंतर।" }
                    ]
                },
                unit3: {
                    title: "यूनिट 3: क्रिया और विशेषण",
                    duration: "Sept - Oct",
                    desc: "Verbs & Adjectives",
                    mapping: {
                        c6: ["विशेषण", "क्रिया (सकर्मक/अकर्मक)"],
                        c7: ["विशेषण की अवस्थाएं", "क्रिया और काल"],
                        c8: ["प्रेरणार्थक क्रिया", "विशेषण (प्रविशेषण)"]
                    },
                    days: [
                        { day: "Day 1-10", topic: "विशेषण और क्रिया", board: "सकर्मक: राम *आम* खाता है", c6: "विशेषण के 4 भेद।", c7: "काल (भूत, वर्तमान, भविष्य)।", c8: "संयुक्त क्रिया और नामधातु क्रिया।" }
                    ]
                },
                unit4: {
                    title: "यूनिट 4: वाक्य और अव्यय",
                    duration: "Nov - Dec",
                    desc: "Syntax & Compounds",
                    mapping: {
                        c6: ["वाक्य के अंग", "मुहावरे"],
                        c7: ["अव्यय (क्रियाविशेषण)", "समास (परिचय)"],
                        c8: ["पदबंध", "समास (विस्तृत)", "वाक्य भेद"]
                    },
                    days: [
                        { day: "Day 1-10", topic: "समास और वाक्य", board: "समास: राजा का पुत्र = राजपुत्र", c6: "उद्देश्य और विधेय।", c7: "क्रियाविशेषण के भेद।", c8: "रचना के आधार पर वाक्य (सरल, संयुक्त, मिश्र)।" }
                    ]
                },
                unit5: {
                    title: "यूनिट 5: लेखन कौशल",
                    duration: "Jan - Feb",
                    desc: "Creative Writing",
                    mapping: {
                        c6: ["पत्र (अनौपचारिक)", "अनुच्छेद"],
                        c7: ["संवाद लेखन", "डायरी लेखन"],
                        c8: ["निबंध", "पत्र (औपचारिक)", "विज्ञापन"]
                    },
                    days: [
                        { day: "Day 1-10", topic: "लेखन", board: "विज्ञापन: कम दाम, अच्छा काम!", c6: "चित्र वर्णन।", c7: "संवाद (Dialogue) लिखना।", c8: "विज्ञापन और सूचना (Notice) लेखन।" }
                    ]
                }
            }
        },

        // ================= GENERAL KNOWLEDGE (GK) =================
        gk: {
            id: "gk",
            name: "GK (सामान्य ज्ञान)",
            icon: "fa-globe-asia",
            color: "#1565C0", // Blue
            units: {
                unit1: {
                    title: "यूनिट 1: अतुल्य भारत (India)",
                    duration: "April - May",
                    desc: "History & Geography",
                    mapping: {
                        c6: ["भारत: नदियाँ, पर्वत", "ऐतिहासिक स्थल"],
                        c7: ["राज्य और राजधानियाँ", "संविधान (Intro)"],
                        c8: ["स्वतंत्रता संग्राम", "भारतीय राजनीति"]
                    },
                    days: [
                        { day: "Day 1-5", topic: "भारत दर्शन", board: "Longest River: Ganga", c6: "हिमालय और दक्षिण के पठार।", c7: "भारत के पड़ोसी देश।", c8: "1857 की क्रांति और गांधी युग।" }
                    ]
                },
                unit2: {
                    title: "यूनिट 2: विश्व दर्शन (World)",
                    duration: "July - August",
                    desc: "Global Facts",
                    mapping: {
                        c6: ["महाद्वीप और महासागर", "अजूबे"],
                        c7: ["देश और मुद्राएं", "विश्व भूगोल"],
                        c8: ["अंतर्राष्ट्रीय संगठन (UN)", "विश्व इतिहास"]
                    },
                    days: [
                        { day: "Day 1-5", topic: "विश्व", board: "Largest Continent: Asia", c6: "7 अजूबे (Taj Mahal etc)।", c7: "प्रमुख देशों की संसदों के नाम।", c8: "प्रथम और द्वितीय विश्व युद्ध (Basic)।" }
                    ]
                },
                unit3: {
                    title: "यूनिट 3: विज्ञान और तकनीक",
                    duration: "Sept - Oct",
                    desc: "Science & Tech",
                    mapping: {
                        c6: ["आविष्कारक", "मानव शरीर"],
                        c7: ["अंतरिक्ष (Space)", "रोग और विटामिन"],
                        c8: ["भारतीय वैज्ञानिक", "रक्षा और तकनीक"]
                    },
                    days: [
                        { day: "Day 1-5", topic: "विज्ञान", board: "Penicillin: Fleming", c6: "कंप्यूटर के भाग।", c7: "ISRO और NASA के मिशन।", c8: "मिसाइल मैन (Kalam) और नोबेल विजेता।" }
                    ]
                },
                unit4: {
                    title: "यूनिट 4: खेल और पुरस्कार",
                    duration: "Nov - Dec",
                    desc: "Sports & Literature",
                    mapping: {
                        c6: ["खेल और खिलाड़ी", "पुस्तकें (बाल साहित्य)"],
                        c7: ["ओलंपिक और एशियाई खेल", "लेखक"],
                        c8: ["खेल शब्दावली", "पुरस्कार (Nobel/Bharat Ratna)"]
                    },
                    days: [
                        { day: "Day 1-5", topic: "खेल", board: "Olympics: 5 Rings", c6: "क्रिकेट और हॉकी के नियम।", c7: "प्रसिद्ध लेखक (Premchand, Shakespeare)।", c8: "ग्रैंड स्लैम (Tennis) और वर्ल्ड कप।" }
                    ]
                },
                unit5: {
                    title: "यूनिट 5: तर्कशक्ति (Reasoning)",
                    duration: "Jan - Feb",
                    desc: "Mental Ability",
                    mapping: {
                        c6: ["पहेलियाँ", "चित्र तर्क"],
                        c7: ["कोडिंग-डिकोडिंग", "श्रृंखला (Number Series)"],
                        c8: ["रक्त संबंध", "दिशा ज्ञान", "करेंट अफेयर्स"]
                    },
                    days: [
                        { day: "Day 1-5", topic: "रीजनिंग", board: "2, 4, 8, 16, __ (32)", c6: "Odd one out छांटना।", c7: "अगर A=1, B=2 तो CAT=?", c8: "Blood Relations (मामा, चाचा)।" }
                    ]
                }
            }
        }
    }
};