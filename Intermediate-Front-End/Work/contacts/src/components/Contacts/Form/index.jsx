import { useEffect, useState } from 'react';

const initalFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
    
    // burada kullanıcının input girişi varsayılan olarak boş değer atadık
    const [form, setForm] = useState(initalFormValues);

    // veri girildiyse eğer değeri sıfırladık
    useEffect(() => {
        setForm(initalFormValues)
    }, [contacts])

    // bir input değiştiği anda bunu state atamasını yapmamız lazım bunun için.
    const onChangeInput = (event) => {
        //varsayılan değeri koruyarak girilen değeri yazdık
        setForm({ ...form, [event.target.name]: event.target.value });
    }


    const onSubmit = (event) => {

        /* buton submit edildiğinde yenileme olayını durdurduk. */
        event.preventDefault();

        // eğer input değeri boş ise bunu ekleme dedik.
        if (form.fullname === "" || form.phone_number === "") {
            alert("Fullname and Phone Number");
            return false;
        }

        // eski değerleri koruyarak atama işlemi yaptık.
        addContact([ ...contacts, form ]);

        // veri yazıldıktan sonraki halini log ile görüntülüyoruz.
        console.log(form);
    }

    return (
        <div>
            <form onSubmit={onSubmit}> 
                <input name="fullname" placeholder="Full Name" onChange={onChangeInput} value={form.fullname} />
                <br />
                <input name="phone_number" placeholder="Phone Number" onChange={onChangeInput} value={form.phone_number} />

                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form;