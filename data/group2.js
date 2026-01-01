/**
 * ==========================================
 * DATA FILE: GROUP 2 (Preparatory) - FULL YEAR
 * Classes: 4, 5
 * Theme: Bright & Energetic (Teal/Blue)
 * Structure: 5 Units (Detailed Syllabus)
 * ==========================================
 */

window.SchoolData = window.SchoolData || {};

window.SchoolData.group2 = {
    id: "group2",
    title: "कक्षा 4 - 5 (Preparatory)",
    subtitle: "तैयारी: नई अवधारणाएं और तर्क (Full Year)",
    theme: "theme-bright",
    subjects: {

        // ================= MATHEMATICS (गणित) =================
        math: {
            id: "math",
            name: "गणित (Maths)",
            icon: "fa-calculator",
            color: "#3F51B5", // Indigo
            units: {
                unit1: {
                    title: "यूनिट 1: संख्या प्रणाली (Large Numbers)",
                    duration: "April - May",
                    desc: "Lakhs, Crores & Operations",
                    mapping: {
                        c4: ["1 लाख तक की संख्याएँ", "स्थानीय मान (Place Value)", "रोमन अंक (I-XXXIX)"],
                        c5: ["1 करोड़ तक की संख्याएँ", "अंतर्राष्ट्रीय संख्या प्रणाली", "रोमन अंक (L, C, D, M)"]
                    },
                    days: [
                        {
                            day: "Day 1-5",
                            topic: "बड़ी संख्याएँ (Large Numbers)",
                            board: "1,00,000 (One Lakh) = 5 Zeros\n1,00,00,000 (One Crore) = 7 Zeros",
                            c4: "ईंटों की इमारत (Building with Bricks) - 1000 से 1 लाख तक।",
                            c5: "मछली उछली (Fish Tale) - करोड़ तक की गणना और तुलना।"
                        },
                        {
                            day: "Day 6-12",
                            topic: "संक्रियाएँ (Operations)",
                            board: "Sum (+) | Diff (-) | Product (×) | Quotient (÷)",
                            c4: "जोड़ और घटाव के इबारती प्रश्न (Word Problems)।",
                            c5: "बड़ी संख्याओं का गुणा और भाग (Division algorithm)।"
                        }
                    ]
                },
                unit2: {
                    title: "यूनिट 2: गुणनखंड और गुणज (Factors & Multiples)",
                    duration: "July - August",
                    desc: "LCM, HCF & Rules",
                    mapping: {
                        c4: ["गुणज (Multiples)", "गुणनखंड (Factors)", "सम-विषम"],
                        c5: ["ल.स. (LCM)", "म.स. (HCF)", "विभाज्यता के नियम (2,3,5,10)"]
                    },
                    days: [
                        {
                            day: "Day 1-8",
                            topic: "पहाड़े और गुणज (Multiples)",
                            board: "3 के गुणज: 3, 6, 9, 12...\nCommon Multiple: जो दोनों में हो",
                            c4: "मैं तेरा गुणनखंड (Factors Intro)।",
                            c5: "साझा गुणज (Common Multiples) और LCM निकालना।"
                        },
                        {
                            day: "Day 9-15",
                            topic: "गुणनखंड और अभाज्य संख्या",
                            board: "Factors of 12: 1, 2, 3, 4, 6, 12\nPrime No: 2, 3, 5, 7...",
                            c4: "गुणनखंड वृक्ष (Factor Tree) बनाना।",
                            c5: "अभाज्य (Prime) और भाज्य (Composite) संख्याएँ। HCF।"
                        }
                    ]
                },
                unit3: {
                    title: "यूनिट 3: भिन्न और दशमलव (Fractions)",
                    duration: "Sept - Oct",
                    desc: "Parts of Whole",
                    mapping: {
                        c4: ["आधा, चौथाई, तिहाई", "समतुल्य भिन्न (Equivalent)", "भिन्नों का जोड़"],
                        c5: ["भिन्न के प्रकार (Proper/Improper)", "दशमलव (Decimals)", "भिन्न का गुणा"]
                    },
                    days: [
                        {
                            day: "Day 1-10",
                            topic: "हिस्से और पूरे (Fractions)",
                            board: "1/2 (आधा), 1/4 (पाव)\nउचित भिन्न: अंश < हर (2/5)",
                            c4: "रोटी के हिस्से करना। अंश (Numerator) और हर (Denominator)।",
                            c5: "क्या यह एक जैसा दिखता है? (Symmetry & Fractions)।"
                        },
                        {
                            day: "Day 11-20",
                            topic: "दशमलव (Decimals)",
                            board: "1/10 = 0.1\n1/100 = 0.01",
                            c4: "समान हर वाले भिन्नों का जोड़-घटाव।",
                            c5: "रुपये पैसे को दशमलव में लिखना (₹2.50)।"
                        }
                    ]
                },
                unit4: {
                    title: "यूनिट 4: मापन और ज्यामिति (Measure & Shapes)",
                    duration: "Nov - Dec",
                    desc: "Angles, Area, Volume",
                    mapping: {
                        c4: ["लम्बाई, वजन, क्षमता", "समय (Time)", "परिमाप (Perimeter)"],
                        c5: ["कोण (Angles)", "क्षेत्रफल (Area)", "आयतन (Volume)"]
                    },
                    days: [
                        {
                            day: "Day 1-10",
                            topic: "आकृतियाँ और कोण",
                            board: "Right Angle (L) = 90°\nAcute (<90°), Obtuse (>90°)",
                            c4: "खेत और बाड़ (Fields and Fences) - परिमाप निकालना।",
                            c5: "कितने वर्ग? (How many Squares) - क्षेत्रफल का परिचय।"
                        },
                        {
                            day: "Day 11-20",
                            topic: "मापन और समय",
                            board: "1 km = 1000 m\n1 kg = 1000 g\nVolume = L x B x H",
                            c4: "जग और मग (Capacity)। समय सारिणी (Time Table)।",
                            c5: "डिब्बे और स्कैच (3D Shapes)। आयतन (Volume)।"
                        }
                    ]
                },
                unit5: {
                    title: "यूनिट 5: डेटा और पैटर्न (Data Handling)",
                    duration: "Jan - Feb",
                    desc: "Smart Charts & Patterns",
                    mapping: {
                        c4: ["पैटर्न की समझ", "पिक्टोग्राफ (Pictograph)", "बार ग्राफ"],
                        c5: ["पैटर्न के नियम", "पाई चार्ट (Pie Chart)", "टेली मार्क्स"]
                    },
                    days: [
                        {
                            day: "Day 1-10",
                            topic: "पैटर्न का खेल",
                            board: "Rule: Turn 90° clockwise\n1, 4, 9, 16 (Square Nos)",
                            c4: "पैटर्न के नियम ढूँढना। जादुई वर्ग।",
                            c5: "घूमना और पैटर्न (Turns & Patterns)। कोड भाषा।"
                        },
                        {
                            day: "Day 11-15",
                            topic: "स्मार्ट चार्ट",
                            board: "Tally Marks: ||||",
                            c4: "चार्ट बनाना और पढ़ना।",
                            c5: "पारिवारिक वृक्ष (Family Tree) और पाई चार्ट।"
                        }
                    ]
                }
            }
        },

        // ================= SCIENCE / EVS =================
        science: {
            id: "science",
            name: "EVS (विज्ञान)",
            icon: "fa-flask",
            color: "#009688", // Teal
            units: {
                unit1: {
                    title: "यूनिट 1: जंतु जगत (Animals & Senses)",
                    duration: "April - May",
                    desc: "Super Senses & Habitat",
                    mapping: {
                        c4: ["चलो चलें स्कूल", "कान-कान में (Ears)", "नंदू हाथी (Herd Life)"],
                        c5: ["कैसे पहचाना चींटी ने दोस्त को?", "कहानी सपेरों की", "बाघ (Tiger)"]
                    },
                    days: [
                        {
                            day: "Day 1-5",
                            topic: "सुपर सेंस (Senses)",
                            board: "Eagle Eye: 4x Vision\nDog: Strong Smell",
                            c4: "जिनके कान बाहर होते हैं vs जिनके कान नहीं दिखते (Ande vs Bacche)।",
                            c5: "जानवरों की सोने की आदतें (Sloth)। गंध और आवाज की शक्ति।"
                        },
                        {
                            day: "Day 6-10",
                            topic: "समूह में जीवन",
                            board: "Queen Bee: Lay eggs\nWorker Bee: Collect nectar",
                            c4: "हाथियों का झुंड और मधुमक्खियों का छत्ता (Beehive)।",
                            c5: "सांप और सपेरे (Kalbelia Dance)। जानवरों का संरक्षण।"
                        }
                    ]
                },
                unit2: {
                    title: "यूनिट 2: भोजन और पाचन (Food & Health)",
                    duration: "July - August",
                    desc: "Farm to Stomach",
                    mapping: {
                        c4: ["खाना-खजाना", "ओमना का सफर", "दादी माँ के नुस्खे"],
                        c5: ["चखने से पचने तक", "खाएं आम बारहों महीने", "बीज की कहानी"]
                    },
                    days: [
                        {
                            day: "Day 1-8",
                            topic: "पाचन और स्वाद",
                            board: "Tongue Map: Sweet, Salty, Sour, Bitter",
                            c4: "विभिन्न राज्यों का भोजन (Kerala, Gujarat)।",
                            c5: "ग्लूकोज ड्रिप और पेट का तापमान (Dr. Beaumont)।"
                        },
                        {
                            day: "Day 9-15",
                            topic: "बीज और कृषि",
                            board: "Germination: Seed -> Sprout -> Plant",
                            c4: "बगीचा (Basva's Farm)। प्याज की फसल।",
                            c5: "शिकारी पौधे (Pitcher Plant)। बीजों का बिखरना (Dispersal)।"
                        }
                    ]
                },
                unit3: {
                    title: "यूनिट 3: जल और वायु (Water & Air)",
                    duration: "Sept - Oct",
                    desc: "Resources & Properties",
                    mapping: {
                        c4: ["नदी की यात्रा", "पानी का उपयोग", "पानी कहीं ज्यादा, कहीं कम"],
                        c5: ["पानी के प्रयोग (Floating/Sinking)", "पानी रे पानी", "मच्छरों की दावत"]
                    },
                    days: [
                        {
                            day: "Day 1-10",
                            topic: "पानी के गुण",
                            board: "Float: Wood, Plastic\nSink: Iron, Stone",
                            c4: "गंदा पानी vs साफ पानी। जल जनित रोग (Diarrhea)।",
                            c5: "मृत सागर (Dead Sea)। पानी में क्या घुलता है? (Solubility)।"
                        },
                        {
                            day: "Day 11-15",
                            topic: "मलेरिया और रोग",
                            board: "Malaria -> Mosquito (Anopheles)",
                            c4: "पानी की बचत के तरीके।",
                            c5: "रक्त की जांच (Blood Test)। हीमोग्लोबिन और आयरन।"
                        }
                    ]
                },
                unit4: {
                    title: "यूनिट 4: आवास और यात्रा (Travel & Shelter)",
                    duration: "Nov - Dec",
                    desc: "Journeys & Space",
                    mapping: {
                        c4: ["पहाड़ों की सैर", "बदलते घर", "मसालों की दुनिया"],
                        c5: ["बसेरा ऊँचाई पर", "सुनीता अंतरिक्ष में", "ऐतिहासिक इमारतें"]
                    },
                    days: [
                        {
                            day: "Day 1-8",
                            topic: "आवास (Shelter)",
                            board: "Cold Desert: Ladakh\nHouseboat: Srinagar",
                            c4: "घरों के प्रकार (बांस के घर, पत्थर के घर)।",
                            c5: "चांगपा जनजाति और पश्मीना शॉल। लेह-लद्दाख की यात्रा।"
                        },
                        {
                            day: "Day 9-15",
                            topic: "अंतरिक्ष (Space)",
                            board: "Gravity: Pulls everything down",
                            c4: "नक्शा पढ़ना (Map Reading)।",
                            c5: "सुनीता विलियम्स की कहानी। पृथ्वी का गुरुत्वाकर्षण।"
                        }
                    ]
                },
                unit5: {
                    title: "यूनिट 5: ऊर्जा और कार्य (Energy & Work)",
                    duration: "Jan - Feb",
                    desc: "Fuels & Experiments",
                    mapping: {
                        c4: ["पोचमपल्ली (Weaving)", "कूड़ा-कचरा", "सबके लिए पानी"],
                        c5: ["खत्म हो जाए तो?", "किसकी झलक किसकी छाप", "जमीन खिसक गई"]
                    },
                    days: [
                        {
                            day: "Day 1-8",
                            topic: "ईंधन (Fuel)",
                            board: "CNG: Clean Fuel\nPetrol/Diesel: Pollution",
                            c4: "कपड़े कैसे बनते हैं? (Weaving)।",
                            c5: "पेट्रोल और डीजल की बचत। रिफाइनरी।"
                        },
                        {
                            day: "Day 9-15",
                            topic: "वंशानुक्रम (Genetics Intro)",
                            board: "Traits: Eyes, Hair, Height",
                            c4: "काम का महत्व।",
                            c5: "मेंडल का मटर प्रयोग (Basics)। परिवार के लक्षण।"
                        }
                    ]
                }
            }
        },

        // ================= ENGLISH GRAMMAR =================
        eng_grammar: {
            id: "eng_grammar",
            name: "English Grammar",
            icon: "fa-spell-check",
            color: "#673AB7", // Deep Purple
            units: {
                unit1: {
                    title: "Unit 1: The Sentence & Nouns",
                    duration: "April - May",
                    desc: "Structure & Naming",
                    mapping: {
                        c4: ["Subject & Predicate", "Types of Nouns (Collective/Material)", "Punctuation"],
                        c5: ["Types of Sentences", "Parts of Speech Overview", "Nouns (Gender/Number)"]
                    },
                    days: [
                        {
                            day: "Day 1-5",
                            topic: "Sentences",
                            board: "Sub: The cat\nPred: drinks milk.",
                            c4: "Identify Subject and Predicate. Punctuation marks (., ?, !).",
                            c5: "Declarative, Interrogative, Imperative, Exclamatory sentences."
                        },
                        {
                            day: "Day 6-10",
                            topic: "Nouns",
                            board: "Collective: A flock of birds\nMaterial: Gold, Wood",
                            c4: "Common, Proper, Collective, Material Nouns.",
                            c5: "Countable vs Uncountable Nouns. Gender change."
                        }
                    ]
                },
                unit2: {
                    title: "Unit 2: Pronouns & Adjectives",
                    duration: "July - August",
                    desc: "Describing Words",
                    mapping: {
                        c4: ["Pronouns (Personal)", "Adjectives (Quality)", "Articles"],
                        c5: ["Pronouns (Reflexive/Demonstrative)", "Degrees of Comparison", "Determiners"]
                    },
                    days: [
                        {
                            day: "Day 1-10",
                            topic: "Adjectives",
                            board: "Positive: Tall\nComparative: Taller\nSuperlative: Tallest",
                            c4: "Adjectives of Quality and Quantity.",
                            c5: "Degrees of comparison rules (er/est, more/most)."
                        }
                    ]
                },
                unit3: {
                    title: "Unit 3: Verbs & Tenses",
                    duration: "Sept - Oct",
                    desc: "Time of Action",
                    mapping: {
                        c4: ["Verbs (Main/Helping)", "Simple Present/Past/Future", "Continuous Tenses"],
                        c5: ["Transitive/Intransitive", "Perfect Tenses", "Forms of Verbs"]
                    },
                    days: [
                        {
                            day: "Day 1-8",
                            topic: "Tenses (Simple & Continuous)",
                            board: "Present: play/plays\nContinuous: is/am/are + playing",
                            c4: "Simple Present vs Present Continuous.",
                            c5: "Past Continuous (was/were + ing) usage."
                        },
                        {
                            day: "Day 9-15",
                            topic: "Perfect Tense",
                            board: "Has/Have + V3 (Past Participle)",
                            c4: "Introduction to 'Has' and 'Have'.",
                            c5: "Present Perfect Tense (I have finished my work)."
                        }
                    ]
                },
                unit4: {
                    title: "Unit 4: Adverbs & Prepositions",
                    duration: "Nov - Dec",
                    desc: "Modifying Words",
                    mapping: {
                        c4: ["Adverbs (Manner)", "Prepositions (Place)", "Conjunctions (And/But)"],
                        c5: ["Adverbs (Time/Place)", "Prepositions (Time/Direction)", "Conjunctions (Because/So)"]
                    },
                    days: [
                        {
                            day: "Day 1-10",
                            topic: "Adverbs",
                            board: "Slowly (Manner), Today (Time), Here (Place)",
                            c4: "Adverbs of Manner (Loudly, Quietly).",
                            c5: "Adverbs of Time and Place. Position of adverbs."
                        }
                    ]
                },
                unit5: {
                    title: "Unit 5: Composition & Vocab",
                    duration: "Jan - Feb",
                    desc: "Writing Skills",
                    mapping: {
                        c4: ["Paragraph Writing", "Letter (Informal)", "Synonyms/Antonyms"],
                        c5: ["Story Writing", "Letter (Formal)", "Homophones/Idioms"]
                    },
                    days: [
                        {
                            day: "Day 1-10",
                            topic: "Writing Skills",
                            board: "Letter Format:\nDate -> Salutation -> Body -> Closing",
                            c4: "Writing a letter to a friend. Reading Comprehension.",
                            c5: "Application to Principal. Story with moral."
                        }
                    ]
                }
            }
        },

        // ================= HINDI GRAMMAR =================
        hindi_grammar: {
            id: "hindi_grammar",
            name: "हिंदी व्याकरण",
            icon: "fa-book-reader",
            color: "#FF5722", // Deep Orange
            units: {
                unit1: {
                    title: "यूनिट 1: भाषा और संज्ञा",
                    duration: "April - May",
                    desc: "Language & Nouns",
                    mapping: {
                        c4: ["भाषा और व्याकरण", "संज्ञा के भेद (3)", "लिंग"],
                        c5: ["भाषा, लिपि, बोली", "संज्ञा (5 भेद)", "लिंग और वचन"]
                    },
                    days: [
                        {
                            day: "Day 1-5",
                            topic: "संज्ञा (Noun)",
                            board: "व्यक्तिवाचक: हिमालय\nजातिवाचक: पहाड़\nभाववाचक: ऊँचाई",
                            c4: "व्यक्तिवाचक और जातिवाचक में अंतर।",
                            c5: "भाववाचक संज्ञा बनाना (मीठा -> मिठास)।"
                        }
                    ]
                },
                unit2: {
                    title: "यूनिट 2: सर्वनाम और विशेषण",
                    duration: "July - August",
                    desc: "Pronouns & Qualities",
                    mapping: {
                        c4: ["सर्वनाम (पुरुषवाचक)", "विशेषण (गुण/संख्या)", "गिनती 1-50"],
                        c5: ["सर्वनाम के 6 भेद", "विशेषण के 4 भेद", "प्रविशेषण"]
                    },
                    days: [
                        {
                            day: "Day 1-10",
                            topic: "विशेषण (Adjective)",
                            board: "गुण: काला\nसंख्या: चार\nपरिमाण: 2 किलो",
                            c4: "विशेषण और विशेष्य की पहचान।",
                            c5: "सार्वनामिक विशेषण और परिमाणवाचक विशेषण।"
                        }
                    ]
                },
                unit3: {
                    title: "यूनिट 3: क्रिया और काल",
                    duration: "Sept - Oct",
                    desc: "Verbs & Tenses",
                    mapping: {
                        c4: ["क्रिया (परिचय)", "काल (3 भेद)", "पर्यायवाची"],
                        c5: ["सकर्मक/अकर्मक क्रिया", "काल (विस्तृत)", "विलोम शब्द"]
                    },
                    days: [
                        {
                            day: "Day 1-8",
                            topic: "क्रिया और काल",
                            board: "सकर्मक: राम *पुस्तक* पढ़ता है\nअकर्मक: राम हंसता है",
                            c4: "काम वाले शब्द और काल (है, था, गा)।",
                            c5: "कर्म के आधार पर क्रिया के भेद।"
                        }
                    ]
                },
                unit4: {
                    title: "यूनिट 4: शब्द भंडार",
                    duration: "Nov - Dec",
                    desc: "Vocabulary",
                    mapping: {
                        c4: ["विलोम, पर्यायवाची", "मुहावरे (1-10)", "अनेक शब्दों के लिए एक शब्द"],
                        c5: ["अनेकार्थी शब्द", "मुहावरे और लोकोक्तियाँ", "श्रुतिसम भिन्नार्थक"]
                    },
                    days: [
                        {
                            day: "Day 1-10",
                            topic: "मुहावरे",
                            board: "नौ दो ग्यारह होना = भाग जाना\nआँख का तारा = बहुत प्यारा",
                            c4: "मुहावरों का अर्थ और वाक्य प्रयोग।",
                            c5: "लोकोक्तियाँ (अधजल गगरी छलकत जाए)।"
                        }
                    ]
                },
                unit5: {
                    title: "यूनिट 5: रचनात्मक लेखन",
                    duration: "Jan - Feb",
                    desc: "Creative Writing",
                    mapping: {
                        c4: ["अनुच्छेद लेखन", "पत्र (अनौपचारिक)", "अपठित गद्यांश"],
                        c5: ["निबंध लेखन", "पत्र (औपचारिक)", "संवाद लेखन"]
                    },
                    days: [
                        {
                            day: "Day 1-10",
                            topic: "लेखन",
                            board: "निबंध: मेरा प्रिय मित्र, होली",
                            c4: "मित्र को पत्र। चित्र वर्णन।",
                            c5: "प्रधानाचार्य को अवकाश हेतु पत्र। संवाद।"
                        }
                    ]
                }
            }
        },

        // ================= GK (GENERAL KNOWLEDGE) =================
        gk: {
            id: "gk",
            name: "GK (सामान्य ज्ञान)",
            icon: "fa-globe",
            color: "#795548", // Brown
            units: {
                unit1: {
                    title: "यूनिट 1: अतुल्य भारत",
                    duration: "April - May",
                    desc: "India Facts",
                    mapping: {
                        c4: ["भारत के राज्य/राजधानियाँ", "राष्ट्रीय प्रतीक", "हमारे त्योहार"],
                        c5: ["ऐतिहासिक स्मारक", "प्रसिद्ध भारतीय", "नदियाँ और शहर"]
                    },
                    days: [
                        {
                            day: "Day 1-5",
                            topic: "भारत दर्शन",
                            board: "States: 28 | UTs: 8\nCapital: New Delhi",
                            c4: "राज्य और राजधानियों का मिलान।",
                            c5: "स्मारक (ताजमहल-आगरा, चारमीनार-हैदराबाद)।"
                        }
                    ]
                },
                unit2: {
                    title: "यूनिट 2: विश्व और विज्ञान",
                    duration: "July - August",
                    desc: "World & Tech",
                    mapping: {
                        c4: ["महाद्वीप और महासागर", "आविष्कार और आविष्कारक", "सौरमंडल"],
                        c5: ["विश्व में सबसे बड़ा/छोटा", "मानव शरीर के तथ्य", "अंतरिक्ष"]
                    },
                    days: [
                        {
                            day: "Day 1-5",
                            topic: "विज्ञान और ब्रह्मांड",
                            board: "Largest Planet: Jupiter\nSmallest Bone: Stapes (Ear)",
                            c4: "प्रमुख आविष्कार (Phone-Bell, Bulb-Edison)।",
                            c5: "सौरमंडल के तथ्य। मानव शरीर की हड्डियाँ।"
                        }
                    ]
                },
                unit3: {
                    title: "यूनिट 3: खेल और मनोरंजन",
                    duration: "Sept - Oct",
                    desc: "Sports & Movies",
                    mapping: {
                        c4: ["प्रमुख खेल और खिलाड़ी", "वादद्य यंत्र", "कार्टून्स"],
                        c5: ["खेल ट्रॉफियां", "ओलंपिक तथ्य", "भारतीय सिनेमा"]
                    },
                    days: [
                        {
                            day: "Day 1-5",
                            topic: "खेल जगत",
                            board: "Cricket: 11 Players\nNational Game: Hockey",
                            c4: "खिलाड़ियों को पहचानो (Sachin, Sindhu)।",
                            c5: "कप और ट्रॉफियां (Ranji, World Cup)।"
                        }
                    ]
                },
                unit4: {
                    title: "यूनिट 4: तर्कशक्ति (Reasoning)",
                    duration: "Nov - Dec",
                    desc: "Brain Teasers",
                    mapping: {
                        c4: ["पैटर्न पूरा करो", "दिशा ज्ञान", "पहेलियाँ"],
                        c5: ["कोडिंग-डिकोडिंग", "श्रृंखला (Series)", "रक्त संबंध"]
                    },
                    days: [
                        {
                            day: "Day 1-5",
                            topic: "रीजनिंग",
                            board: "2, 4, 6, 8, __ (10)\nA, C, E, __ (G)",
                            c4: "आकृतियों के पैटर्न।",
                            c5: "नंबर सीरीज़ और दिशाएं (NEWS)।"
                        }
                    ]
                },
                unit5: {
                    title: "यूनिट 5: मिश्रित ज्ञान",
                    duration: "Jan - Feb",
                    desc: "Mix Bag",
                    mapping: {
                        c4: ["महत्वपूर्ण दिवस", "पुस्तक और लेखक", "कंप्यूटर"],
                        c5: ["संक्षिप्ताक्षर (Full Forms)", "करेंट अफेयर्स", "पर्यावरण"]
                    },
                    days: [
                        {
                            day: "Day 1-5",
                            topic: "General Awareness",
                            board: "Earth Day: 22 April\nCPU: Central Processing Unit",
                            c4: "दिन और तिथियाँ। कंप्यूटर के भाग।",
                            c5: "फुल फॉर्म्स (WHO, ISRO, ATM)।"
                        }
                    ]
                }
            }
        }
    }
};