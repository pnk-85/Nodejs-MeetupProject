import NewMeetupForm from '../../components/meetups/NewMeetupForm'



const NewMeetuPage = () => {

    const addMeetupHandler = (enteredMeetupData) => {
        console.log(enteredMeetupData);
    }
 

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}

export default NewMeetuPage;