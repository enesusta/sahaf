import React from 'react';
import {Li} from "../styles/GeneralStyles";

const HomeHeader = () => {

    return (
        <Li><pre>Hoşgeldiniz. Aşağıda sistemde kayıtlı olan tüm kitapların bir listesini görmektesiniz.</pre>
            <pre>Kitap eklemek için <strong>Kayıt ol!</strong> butonundan bir <strong>yazar</strong> olarak kayıt olmalı ve daha
                sonrasında <strong>Profilim</strong> kitap ekleyebilir, düzenleyebilir yahut silebilirsiniz.</pre>
        </Li>
    );
};

export default HomeHeader;

