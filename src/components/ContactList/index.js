import s from "./ContactList.module.css";


const ContactList = ({ contacts, onDelete }) => {


    return (

        < ul className={s.contactsList}>
            {contacts.map(({ id, name, number }) => (
                <li key={id}>
                    {name}: {number}
                    <button id={id} onClick={onDelete} className={s.button}>
                        Delete
                    </button>
                </li>
            ))}
        </ul >
    )

}
export default ContactList