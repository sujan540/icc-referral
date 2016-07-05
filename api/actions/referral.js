const initialReferral = [];
const referral ={};
referral.skillset =['Java', '.Net', 'C++', 'C', 'JavaScript'];

const getReferrals = (req, res) => {
  let referrals = req.session.referrals;
  if (!referrals) {
    referrals = initialReferral;
    req.session.referrals = referrals;
  }
  return referrals;
}

const getSkillSetsOptions = (req, res) => {
  let skillSets = req.session.skillSets;
  if (!skillSets) {
    skillSets = referral.skillset;
    req.session.skillSets = skillSets;
  }
  return skillSets;
}

function getId(referrals){
  return referrals.reduce((maxId, referral)=>{
    return Math.max(referral.id, maxId)
  },-1)+1
}

//----------GET ALL
export function getAll(req, res){
 	console.info('----\n==> LOAD REFERRALS');
  return new Promise((resolve, reject) => {
    // make async call to database
    setTimeout(() => {
      // if (Math.floor(Math.random() * 3) === 0) {
      //  reject('Movies load fails 33% of the time. You were unlucky.');
      // } else {
        resolve(getReferrals(req));
      // }
    }, 1000); // simulate async load
  });
}

export function getSkillSets(req, res){
  console.info('=>Loading skill sets');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getSkillSetsOptions(req));
      }, 1000);
  });

}

export function addReferral(req, res){
  console.info('----\n==> Add Referral');
  const referral = req.body;
  console.info(referral);
  const referrals = getReferrals(req);

  referrals.push({
    id: getId(referrals),
    name: referral.form.name,
    skill: referral.form.skill,
  //  technology: referral.technology,
  //  connection: referral.connection,
    status:referral.form.status,
    extra:referral.form.extra
  });
  console.info(referrals);
}
