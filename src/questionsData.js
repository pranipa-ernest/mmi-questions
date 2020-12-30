//1 -- ethical 
//2 -- critical 
//3 -- problem solving
//4 -- acting 
//5 -- healthcare/current issues

const questionsData = [
    {
        id: 1,
        text: "You learn from your best friend that she was involved in a hit and run accident one night  when she had too much to drink and had hit a person crossing the street. She feels badly  about this incident. What do you do if anything?",
        completed: false
    },
    {
        id: 1,
        text: "You witness two girls hitting a homeless woman and taking items that belong to her. The  victim has only a bleeding nose. You approach her after the incident and she tells you she  is fine, this has happened before by the same girls and it is no big deal. How do you deal  with it?",
        completed: false
    },
    {
        id: 1,
        text: "A patient has just been diagnosed with cancer. The patient takes the news very badly and  is concerned with pain and the immediate treatment. You know that is it extremely likely  that the patient will die within 9 months regardless of course of treatment. What do you  tell the patient, what are your ethical obligations, your legal obligations?",
        completed: false
    },
    {
        id: 1,
        text: "Your older sister tells you that she values her career and is reluctant to take time away to  have a baby. Her husband agrees with her. They have arranged to conceive an embryo  through in vitro fertilization. A company in India will implant the embryo in a surrogate  mother from a nearby village who will be paid $5,000. Two weeks after the baby is born,  the company will deliver the baby to your sister and her husband. Your mother is opposed  to this arrangement whereas your father supports her decision. Your sister asks for your  support. How would you respond to your sister?",
        completed: false
    },
    {
        id: 2,
        text: "You and 3 friends are watching a 70 yr old man prepare a hot-air balloon. The balloon is  ready and the man is holding one of the 5 released anchors ropes that are all 6m long. His  10 yr old grandson is already in the basket. A gust of wind raises the balloon 2m off the  ground. The man shouts for help and you and your friends each grab close to the end of  one of the other anchor ropes. The balloon raises so high that even though you are  holding onto the ropes, you are lifted off the ground to a height of 7m. What would you  do in this situation.",
        completed: false
    },
    {
        id: 2,
        text: "At the beginning of your last year of undergraduate studies, the Dean of your Faculty has  offered to all of you the opportunity to swallow a „red‟ pill. If swallowed, this pill would  increase enormously your ability to „absorb‟ all the educational material being presented  to you in all your courses. In fact, this pill would basically guarantee that you would  receive an A+ in all your future courses with a significantly reduced workload. Would  you take the red pill?",
        completed: false
    },
    {
        id: 2,
        text: "Universities are commonly faced with the complicated task of balancing the educational  needs of their students and the cost required to provide learning resources to a large  number of individuals. As a result of this tension, there has been much debate regarding  the optimal size of classes. One side argues that smaller classes provide a more  educationally effective setting for students, while others argue that it makes no difference,  so larger classes should be used to minimize the number of instructors required. Discuss  your opinion with the examiner.",
        completed: false
    },
    {
        id: 2,
        text: "You are treasurer of a university Club controlling club money and you are one of 3  members of the Executive. There is going to be a Meeting in another city with similar  clubs from other universities. The club has enough money to cover the costs of only 3  members. There are 8 club members and everybody wants to go and for the club to pay  their expenses. What do you do?",
        completed: false
    },
    {
        id: 3,
        text: "The daughter of the interviewer is 16 years old. She is adamant that she have a tattoo next  week. The interviewer is against letting her daughter have a tattoo and this is causing  much friction in the household. What advice would you give the interviewer?",
        completed: false
    },
    {
        id: 3,
        text: "A student is working in a clinic, where the office double book aboriginal patients. The  student asks their reasoning and the receptionist replies that “These people never show up  for their appointments.” How would you deal with this situation?",
        completed: false
    },
    {
        id: 3,
        text: "You are working on a group project with 5 other students. One of the students doesn't  show up for meetings or if they do show up - they are late and leave early. They have put  no effort into the group project but show up on the day of the presentation and try to take  credit for the project. What do you do in this situation?",
        completed: false
    },
    {
        id: 3,
        text: "You are a GP working in a community where the majority of patients have very little  education and many are refugees from other nations. What challenges do you foresee",
        completed: false
    },
    {
        id: 4,
        text: "Parking Garage (Communication Skills) The parking garage at your place of work has  assigned parking spots. On leaving your spot, you are observed by the parking attendant  as you back into a neighbouring car, a BMW, knocking out its left front headlight and  denting the left front fender. The garage attendant gives you the name and office number  of the owner of the neighbouring car, telling you that he is calling ahead to the car owner,  Tim. The garage owner tells you that Tim is expecting your visit. You enter Tim‟s office.",
        completed: false
    },
    {
        id: 4,
        text: "You are a family physician. One of your patients, Mark, did not attend one of his classes  and missed an important exam. He told you that his teacher would like a doctor's note  explaining his absence from class; otherwise, he will receive zero, and all hell will break  loose. He wants to you write a note for him, indicating that he was not feeling well  enough to write the exam. Not able to find any physical symptoms, explain how you  would deal with this. Enter the room and talk to Mark.",
        completed: false
    },
    {
        id: 4,
        text: "Your friend Jason hasn't come to class for a few days. Being a hardworking premed  student, he very seldom skips classes. You know that he is applying to medical school in  the past several weeks. You called his house and he said you can visit him. You decided  to pay him a visit after your classes. Enter the room and talk to Jason.",
        completed: false
    },
    {
        id: 4,
        text: "You are a cardiologist at a local hospital, who just finished a shift and has a tight run to  your daughter's high school graduation ceremony. As you headed off to the door, Jennifer,  a patient who knew you well, saw you from the waiting room and grabbed your attention.  'Doctor! I have a bad chest pain. Please stay for a bit. I'll feel much better if you were  here.' Enter the waiting room and talk to Jennifer",
        completed: false
    },
    {
        id: 5,
        text: "You are part of a committee to decide where the money for health care in our province is  spent. It is your turn to inform the committee of your opinion on what you think is the  single most important area requiring funding.",
        completed: false
    },
    {
        id: 5,
        text: "If the Prime Minister of Canada were to ask your advice on one change that could be  applied to the healthcare system in Canada that would improve it enormously and have  the greatest positive effect, what would it be?",
        completed: false
    },
    {
        id: 5,
        text: "Preferential Admission (Knowledge of the Heath Care System): Due to the shortage of  physicians in rural communities such as those in Northern Ontario, it has been suggested  that medical programmes preferentially admit students who are willing to commit to a 2  or 3 year tenure in an under-serviced area upon graduation. Consider the broad  implications of this policy for health and health care costs. For example, do you think the  approach will be effective?",
        completed: false
    },
    {
        id: 5,
        text: "Discuss the social, legal, medical implications of a needle-exchange program with the  interviewer. (Consider a needle exchange program to be a free service in which screens  for STIs are provided, along with immunizations, physician referrals, and exchanging  used needles for new ones). Follow up question: What are some viable alternatives?",
        completed: false
    }
]

export default questionsData