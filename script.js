
    // Function to convert medical term to simplified term
    function convertMedicalTermToNormal(term) {
      term = term.toLowerCase();
      const medicalTermMapping = {
        "pneumonoultramicroscopicsilicovolcanoconiosis": "Lung disease caused by inhaling very fine silica dust",
        "osteoarthritis": "Degenerative joint disease",
        "myocardial infarction": "Heart attack",
        "hematuria": "Presence of blood in urine",
        "hyperlipidemia": "Elevated levels of lipids (fats) in the blood",
        "hypertension": "High blood pressure",
        "gastroenteritis": "Inflammation of the stomach and intestines",
        "appendicitis": "Inflammation of the appendix",
        "arthritis": "Joint inflammation",
        "bronchitis": "Inflammation of the bronchial tubes",
        "cardiomyopathy": "Disease of the heart muscle",
        "colitis": "Inflammation of the colon",
        "dermatitis": "Skin inflammation",
        "endocarditis": "Inflammation of the inner lining of the heart",
        "gastritis": "Inflammation of the stomach lining",
        "hepatitis": "Inflammation of the liver",
        "laryngitis": "Inflammation of the larynx",
        "meningitis": "Inflammation of the membranes surrounding the brain and spinal cord",
        "nephritis": "Inflammation of the kidneys",
        "pancreatitis": "Inflammation of the pancreas",
        "phlebitis": "Inflammation of a vein",
        "tonsillitis": "Inflammation of the tonsils",
        "gastroesophageal reflux disease": "Acid reflux disease",
        "atrial fibrillation": "Irregular heartbeat",
        "chronic obstructive pulmonary disease": "Lung disease characterized by airflow obstruction",
        "coronary artery disease": "Narrowing of the coronary arteries",
        "diabetes mellitus": "High blood sugar",
        "diverticulitis": "Inflammation or infection of small pouches in the digestive tract",
        "hypothyroidism": "Underactive thyroid gland",
        "migraine": "Severe headache often accompanied by nausea and sensitivity to light",
        "osteoporosis": "Weak, brittle bones",
        "pneumonia": "Inflammation of the lungs",
        "rheumatoid arthritis": "Autoimmune disease causing joint inflammation",
        "sepsis": "Life-threatening response to infection",
        "stroke": "Loss of brain function due to interruption of blood flow",
        "ulcerative colitis": "Inflammation and ulcers in the colon",
        "anemia": "Decreased red blood cell count",
        "asthma": "Chronic respiratory condition characterized by inflammation and narrowing of the airways",
        "celiac disease": "Autoimmune disorder affecting the small intestine due to gluten intolerance",
        "cirrhosis": "Chronic liver disease characterized by scarring of the liver tissue",
        "congestive heart failure": "Heart condition where the heart is unable to pump blood effectively",
        "depression": "Mental health disorder characterized by persistent sadness and loss of interest",
        "fibromyalgia": "Chronic pain condition characterized by widespread musculoskeletal pain and fatigue",
        "gout": "Type of arthritis characterized by sudden and severe pain, swelling, and redness",
        "hypoglycemia": "Abnormally low blood sugar levels",
        "irritable bowel syndrome": "Common gastrointestinal disorder characterized by abdominal pain and changes in bowel habits",
        "kidney stones": "Hard deposits of minerals and salts that form in the kidneys",
        "lupus": "Autoimmune disease causing inflammation and damage to various parts of the body",
        "multiple sclerosis": "Chronic autoimmune disease affecting the central nervous system",
        "obesity": "Excessive accumulation of body fat",
        "obsessive-compulsive disorder": "Mental health disorder characterized by obsessive thoughts and compulsive behaviors",
        "parkinson's disease": "Progressive nervous system disorder affecting movement",
        "pneumothorax": "Collapsed lung",
        "psoriasis": "Chronic autoimmune condition characterized by red, itchy, and scaly patches on the skin",
        "schizophrenia": "Severe mental disorder characterized by disordered thinking, emotions, and behaviors",
        "sinusitis": "Inflammation of the sinus cavities",
        "sleep apnea": "Sleep disorder characterized by pauses in breathing during sleep",
        "ulcer": "Open sore on the skin or mucous membrane",
        "urinary tract infection": "Infection of the urinary system",
        "vitiligo": "Skin condition characterized by loss of pigmentation",
        "abduction": "Moving a limb or body part away from the midline of the body",
        "ABG": "Arterial blood gas reading",
        "acetaminophen": "A nonsalicylate analgesic-antipyretic (Tylenol)",
        "ACE": "Angiotension-converting enzyme",
        "ACLS": "Advanced cardiac life support; includes electricity (defibrillator) and drugs for life-threatening arrhythmias",
        "acidotic": "Abnormally high acidity of body fluids and tissues",
        "acute": "Sudden, intense flare-up",
        "adenosine": "A drug used to help a patient with Supraventricular tachycardia convert to normal sinus rhythm",
        "agonal": "A word used to describe a major negative change in a patient's condition, usually preceding immediate death, such as a complete cessation of breathing or a dire change in the patient's EEG or EKG",
        "albuterol": "A bronchodilator used on asthma patients and patients having bronchial spasms to dilate the bronchia and improve breathing",
        "ALOC": "Acute Loss of Consciousness",
        "alzheimer's disease": "A progressive disease with specific brain abnormalities marked by memory loss and progressive inability to function normally at even the simplest tasks",
        "AMA": "Against medical advice or American Medical Association",
        "ambu-bag": "Handheld squeeze bag attached to a face mask. see also bagging",
        "amitriptyline": "A tricyclic antidepressant",
        "amoxicillin": "An antibiotic",
        "amp": "Abbreviation for Ampule, which is a sealed plastic or glass capsule containing a single dose of a drug in a sterile solution for injection.",
       
      };
      
      // Check if the term exists in the mapping
      if (term in medicalTermMapping) {
        return medicalTermMapping[term];
      } else {
        return "Simplified term not found";
      }
    }

    // Function to handle button click
    function handleConvertClick() {
      const medicalTermInput = document.getElementById('medical-term').value.trim();
      const resultElement = document.getElementById('result');
      const normalTerm = convertMedicalTermToNormal(medicalTermInput);
      resultElement.textContent = normalTerm;
    }

    // Event listener for the convert button
    document.getElementById('convert-btn').addEventListener('click', handleConvertClick);
