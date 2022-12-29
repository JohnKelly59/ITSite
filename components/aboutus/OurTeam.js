import ProfileCard from "./ProfileCard";
import Grid from "@mui/material/Unstable_Grid2";
import Zoom from "@mui/material/Zoom";

export default function OurTeam() {
  let team = [
    {
      name: "Corlette Luke- Cambridge",
      title: "PT CCI, Cert LSVT, DN, VRT, FCE",
      img: "https://www.idealtherapy.net/wp-content/uploads/2019/12/corlette.jpg",
      info: "Corlette Luke Cambridge is dedicated to and passionate about improving the quality of life for every patient she encounters. For over twenty one years, Corlette has had a rewarding career as a physical therapist.As President and CEO of Ideal Therapy Rehabilitation Services, helping the people of her community to live healthier and more active lives with less pain is her calling and mission.Embarking upon her journey to become an exceptional physical therapist, Corlette attended Kingsborough Community College in Brooklyn, NY, where she earned an associate degree in Applied Science (Pre-Physical Therapy) in 1995. She then went on to pursue and obtain her Physical Therapy Degree at State University of New York, Brooklyn Health Science Center in 1998.Corlette uses her specialized skills in such areas as adult and pediatric care, certification in dry needle techniques and functional mobility to deliver measurable result and positive outcomes to her patients, in the shortest period of time possible, in an empathetic and compassion manner. Her goal is to create a patient experience that exceeds all expectations.In her rare spare time, Corlette enjoys interior decorating, event planning and relaxing with her family and friends.",
    },
    {
      name: "Samson St. Remy",
      title: " OTR/L, Cert IASTM, FMT",
      img: "https://www.idealtherapy.net/wp-content/uploads/2019/12/samson.jpg",
      info: "Samson St. Remy, OTR/L is dedicated and enthusiastic about helping others, as he describes this as his passion in life. By using his education and knowledge and experience as an Occupational Therapist, he is able to aid others in achieving their aspirations and goals.“Your service to aiding/helping people is not a privilege it’s a responsibility. ….and if it’s not done out of love and care, you’re not fulfilling the purpose of your gift,” says Samson.Samson has served in various inpatient and outpatient settings including skilled nursing, home health, and hospital rehab. He offers a well-rounded skillset that runs the spectrum from pediatric to geriatric care. Samson continues his great work within his field with goals of one day opening up a full spectrum therapy clinic, to service his community and all its needs.Samson is a Haitian-American originally from South Florida. By first obtaining his undergraduate degree in Health Science with a concentration in Physical Therapy and a minor in Chemistry, Samson went on to receive his Master of Occupational Therapy degree at Florida Agricultural and Mechanical University.He enjoys watching cartoons, dancing, and playing the drums.",
    },
    {
      name: "Amanda Robinson",
      title: "CPC, CBS",
      img: "https://www.idealtherapy.net/wp-content/uploads/2021/07/amanda.jpg",
      info: "Amanda Robinson is a Certified Professional Coder who oversees the Billing department for Ideal Therapy. Her responsibilities are focused upon ensuring that all billing codes are in compliance and that Ideal Therapy’s revenue flow is consistent throughout the year.Amanda completed her undergrad studies at the University of Georgia. Continuing her education, she received an associate degree for Medical Billing and Coding from Herzing University. She is also certified for Ambulatory, Professional Facility Billing.When Amanda is not working, she loves spending time with her family, shopping, and watching sports. She is born and raised in Atlanta, so the Falcons has always been her #1 team. Since becoming a member of the Fayetteville Chamber of Commerce, Amanda has currently evolved her own company AR Billing Solutions.",
    },
    {
      name: "Shanice Reeves",
      title: "DPT, PCS, Cert LSVT, DN, FMT",
      img: "https://www.idealtherapy.net/wp-content/uploads/2021/06/shanice.jpg",
      info: "Dr. Shanice J Reeves, PT, DPT has been practicing since 2019, however her love for physical therapy began when she was in the 6th grade. Since then, she has wanted to help people move and return to their normal lives, pain free and active.She received her Bachelor’s degree in Exercise and Sports Science with a certificate in Disability Studies. She then received her Doctorate in Physical Therapy at Hampton University. In 2022, she became a Board Certified Pediatric Specialist through the APTA. She is currently LSVT Certified, a Functional Movement Specialist, and certified in Dry Needling. She loves working with the neurologic population and the pediatric population.When she is not treating, she enjoys spending time with her dog Sarabi and her family/friends. Her hobbies include dancing, watching movies, and reading a good book. Welcome to Ideal Therapy, I can’t wait to work with you!",
    },
    {
      name: "Brittney McGhee",
      title: "OT/L, CAS",
      img: "https://www.idealtherapy.net/wp-content/uploads/2021/07/brittney.jpg",
      info: "Brittney McGhee is an Occupational Therapist with clinical experience in hand therapy and pediatric therapy. She was first introduced to OT when her grandmother became ill and she wanted to help keep her spirits up by spending time caring for her.Brittney previously received her Bachelor of Science degree from Troy University with a concentration in Psychology. She graduated in August of 2018, with a Master of Occupational Therapy degree from the University of St. Augustine of Health Sciences.Brittney was born and raised in Atlanta, Ga. In her free time she loves to spend time with family and friends, dance, and travel.",
    },
    {
      name: "Denise Williams",
      title: "CCC-SLP",
      img: "https://www.idealtherapy.net/wp-content/uploads/2019/12/denise.jpg",
      info: "J. Denise Williams began her career as a speech pathologist in 2015, working for Clayton County Public Schools, however, her dream job was always to work in a private facility where she could do one-on-one therapy. She absolutely adores children and loves working with adults as well, to help them live their best possible lives.Denise began working at Ideal Therapy in June 2018, which she states has been ‘the highlight of her career’. “Ideal Therapy has allowed me to be the speech therapist that I’ve always wanted to be. I’m allowed to work in an environment that motivates me and helps me to fulfil my purpose in life”.A native of Conway, SC. Denise graduated from the Academy of Arts, Science and Technology as a pre-med major. She began her collegiate career at Hampton University where she received a Bachelor of Arts in Communicative Sciences and Disorders in 2012. She received her Master of Arts in Speech Pathology and Audiology from South Carolina State University in 2014.She is a proud member of Alpha Kappa Alpha Sorority Inc. and an avid supporter of Autism Awareness. She enjoys anything craft related and “hands on” as well as spending time with her Pitbull Nala and Peagle Cali.",
    },
    {
      name: "Bianca Tyson",
      title: "DPT, Cert DN",
      img: "https://www.idealtherapy.net/wp-content/uploads/2021/06/bianca.jpg",
      info: "Dr. Tyson is a native of Atlanta Ga. She has always had a passion to be a healthcare professional since the age of three.   She fell in love with physical therapy after having a 12 week shadowing experience as a senior in the HOSA program at Westlake High School. Bianca attained her Bachelor of Science degree in Exercise Science at Georgia State University.  She graduated from Florida Agricultural and Mechanical University, where she received her Doctorate in Physical Therapy in April 2016.She has gained most of her experience working with the geriatric and pediatric populations as well as working with athletes.  Her goal is to own a pediatric facility. She is also certified in Kinesio-taping. She began working for Ideal Therapy in 2018 part-time, and has recently decided to join the team as a full time employee.In her spare time, Bianca enjoys trying new restaurants, traveling, bike riding, coaching, and spending quality time with her daughter.",
    },
    {
      name: "Deshia Dees",
      title: "SLP",
      img: "https://www.idealtherapy.net/wp-content/uploads/2021/06/deshia.jpg",
      info: "Deshia Dees, CFY-SLP is a native of Gautier, Mississippi who recently relocated to the Fayetteville area to pursue her true calling: making a difference in the lives of children and their families. Though she has gained most of her experience with adult and geriatric populations in acute care and skilled nursing facilities, Deshia intends to explore her purpose and passion for the field by working with children in a private practice setting.Deshia received her Bachelor of Science degree in Communicative Sciences and Disorders from the University of Mississippi (Ole Miss) in 2017. Soon after, she began her matriculation at the University of Louisiana at Lafayette where she received a Master of Science degree of Speech Language Pathology and Audiology in May 2021.For leisure, Deshia enjoys traveling, cooking, yoga, and spending time with family.",
    },
    {
      name: "Rashad Jackson",
      title: "OTR/L",
      img: "https://www.idealtherapy.net/wp-content/uploads/2021/07/rashad.jpg",
      info: "This is Rashad Jackson, he is an Occupational therapist that works with both kids and adults here at Ideal Therapy. He received his masters at Tuskegee University.  He has been practicing as an Occupational Therapist for 5 years. He has been with Ideal Therapy since December 2019. Rashad is passionate and committed to helping his patients progress in therapy, no matter what the condition. He is a team player when it comes to his patients. Doing what he can to make sure his patients get the highest quality possible in treatment.",
    },
    {
      name: "Amber M. Denham",
      title: "M.S., CCC-SLP",
      img: "https://www.idealtherapy.net/wp-content/uploads/2021/08/amber.jpg",
      info: "Amber M. Denham, M.S., CCC-SLP graduated from Jackson State University in 2015 with a Master’s degree in Communicative Disorders. Upon graduation, Amber moved to San Jose, California to pursue her career as a Speech-Language Pathologist. She has worked with many diverse populations in a variety of clinical settings ranging from Skilled Nursing Facilities, In-home based intervention for adults and children, pre-school, middle and high school settings and pediatric clinics. As native of Decatur she returned to Georgia and joined the Ideal Therapy team in 2021.Amber’s passion is to continue providing evidence-based treatment in early intervention, specializing in communication and feeding disorders with children with special needs. She is clinically trained in Hanen More the Words, PROMPT, DIR Floortime,  PECS Level 1, Michelle Garcia Winner’s Social Thinking Methodology, SOS Approach to Feeding Level 1 and Hippotherapy Treatment Level 1.Amber enjoys playing tennis, being out doors, volunteering in her community, and animals. She also loves spending time with her family and friends. Her greatest joy, as a Speech-Language Pathologist, is 'Being present in the moment when a family experiences their child reaching their first milestone in their communication journey.'",
    },
    {
      name: "Mina Armijo",
      title: "PTA",
      img: "https://www.idealtherapy.net/wp-content/uploads/2022/04/mina.jpg",
      info: "Mina Armijo, PTA  graduated from Lanier Technical College with an Associate Degree in Physical Therapy in 2020. Additionally, she also attended Young Harris College and University of North Georgia in Dahlonega, GA.She has been practicing for a year in orthopedic outpatient. Prior to working, she has had experience in acute care, inpatient, outpatient, and pediatric outpatient settings. Mina is interested in pediatrics and is excited for the opportunity to explore this passion. She enjoys helping people get back to doing things they love.In her free time, she enjoys hiking, playing with her dog Billie, and creating art of all different medias. Fun fact she is a certified beekeeper in the state of GA.",
    },
    {
      name: "Jabria Jackson",
      title: "M.A., CCC-SLP",
      img: "https://www.idealtherapy.net/wp-content/uploads/2022/09/jabriajackson.jpg",
      info: "Jabria Jackson, M.A., CCC-SLP graduated from North Carolina Agricultural and Technical State University with a Bachelors Degree in Speech-Language Pathology and Audiology and received a Masters Degree in Communicative Sciences and Disorders from Michigan State University.Through research and clinical experiences, she has gained a passion for the field of Speech-Language Pathology. Jabria has worked in a variety of settings such as schools and private practices for the pediatric population, as well as hospitals and outpatient clinics for adults and geriatrics.Jabria was born and raised in Aiken, SC and enjoys traveling and spending time with family and friends during her free time.",
    },
  ];
  return (
    <>
      <Grid justifyContent="center" container>
        {team.map((teamMember, index) => {
          return (
            <Zoom in={true} style={{ transitionDelay: 250 * index + "ms" }}>
              <Grid
                md={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ProfileCard data={teamMember} />
              </Grid>
            </Zoom>
          );
        })}
      </Grid>
    </>
  );
}
