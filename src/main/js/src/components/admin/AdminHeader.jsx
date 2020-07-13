import React from 'react';
import {Li} from "../styles/GeneralStyles";



const AdminHeader = () => {

    return (
        <Li>
            Aşağıdaki tablo üzerinde sistemde kayıtlı olan tüm kullanıcıları görmektesiniz.<br/><br/>
            Kullanıcıların yetkilerini,edebi akımlarını,doğum tarihlerini düzenleyebilirsiniz. Fakat kullanıcı isimlerini, kayıt tarihlerini düzenleyemezsiniz. Rolleri düzenlerken virgül bırakmayı ihmal etmeyin. <br/><br/> Ayrıca her bir kullanıcının kitaplarını güncelleyebilir yahut silebilirsiniz.
        </Li>
    );
};

export default AdminHeader;
