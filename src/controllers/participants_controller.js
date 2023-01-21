import Participant from '../models/Participant.js'



//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
const registerForm = (req, res) => {
  res.render('pages/registerParticipant')
}


//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
const getParticipant = async (req, res) => {

  const id = req.params.id

  try {

    const participant = await Participant.findById(id);
    res.status(200).json({ message: "Utilisateur trouvé", data: participant });

  } catch (err) {
    res.status(500).json(err);
  }
}

//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
const getParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();

    if (!participants) {
      return res.status(404).json({ message: "Aucun participant trouvé dans la base" });
    }

    //res.status(200).json({message:"Utilisateur trouvé", data:participants});
    res.render('pages/participantsList', { participantsList: participants });

  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la connexion à la base de données", error: err });
  }
}


//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
const saveParticipant = async (req, res) => {
  Participant.findOne({ email: req.body.email })
    .then(participant => {
      if (participant) {
        return res.status(409).json({ message: "Ce participant existe déjà" })
      }

      if (!participant) {

        if (req.body.name == "" || req.body.firstName == "" || req.body.email == "" || req.body.phone == "") {
          //return res.status(500).json({ message: "Ces champs sont ogligatoires" })
         return res.render('pages/registerParticipant', {message: "Ces champs sont ogligatoires"})
        }

        const newParticipant = new Participant({
          name: req.body.name,
          firstName: req.body.firstName,
          email: req.body.email,
          phone: req.body.phone,
        });

        newParticipant.save()
          .then(registeredParticipants => {
             //res.status(200).json({message:'Participant enregistré avec succès', data : registeredParticipants});
              res.render('pages/registerParticipant')
          })
          .catch(err => {
           // res.status(500).json({ message: "Impossible d'insérer un nouveau participant", error: err });

            res.render('pages/registerParticipant')
          })


      }
    })
}



export { getParticipant, getParticipants, saveParticipant, registerForm} 