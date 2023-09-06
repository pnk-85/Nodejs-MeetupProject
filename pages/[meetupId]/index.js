
import MeetupDetail from "../../components/meetups/MeetupDetail";



const MeetupDetails = () => {
    return (
        <MeetupDetail  
        image="https://float-production-blog.storage.googleapis.com/2022/09/Selecting-a-meetup-location.png" 
        title='my first meetup'
        address="xyz"
        description='meetup description'/>
    )
}

export async function getStaticPaths () {

    return {
        fallback : false,
        paths: [
            {params: {
                meetupId: 'm1',
            }},
            {params: {
                meetupId: 'm2',
            }},
            {params: {
                meetupId: 'm3',
            }}
        ]
    }
}

export async function getStaticProps (context) {

    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData : {
                image:"https://float-production-blog.storage.googleapis.com/2022/09/Selecting-a-meetup-location.png",
                id: meetupId,
                title: 'my first meetup',
                address: 'xyz',
                description:'meetup description'
            }
        }
    }
}

export default MeetupDetails;