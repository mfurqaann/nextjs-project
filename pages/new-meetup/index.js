import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetup = () => {
   const addMeetupHandler = (addMeetupData) => {
      console.log(addMeetupData)
   }

   return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetup
