import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
    const router = useRouter();

    async function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);

        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);

        router.push('/');
    }

    return (
        <Fragment>
            <Head>
                <title>Add a Meetup</title>
                <meta
                    name='description'
                    content='Add Your Own Meetups'
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
        </Fragment>
    );
};

export default NewMeetupPage;