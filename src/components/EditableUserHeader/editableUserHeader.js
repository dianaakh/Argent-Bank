import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './editableUserHeader.css'
import { fetchUserProfile } from '../../redux/actions/profile.action';
import EditName from '../EditName/editName';

const EditableUserHeader = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile.userProfile);
  const [isEditing, setIsEditing] = useState(false);


  dispatch(fetchUserProfile());

  return (
    <div className="header bg-dark">
      {isEditing ? (
        <EditName setIsEditing={setIsEditing} />
      ) : (
        <>
          <h1>Welcome back<br />{userProfile.firstName} {userProfile.lastName} !</h1>
          <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
          <h2 className="sr-only">Accounts</h2>
        </>
      )}
    </div>
  );
};

export default EditableUserHeader;