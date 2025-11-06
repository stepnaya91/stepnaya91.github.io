import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavigationState } from 'src/navigation/types';
import { LoginForm } from '../../components/authBack/LoginFormComponent/LoginForm';
import { createPortal } from 'react-dom';

const Auth: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const login = () => {
    const state = location.state as NavigationState;    
    navigate(state?.from || '/');
  };

  return (
    <div>
      {createPortal(      
            <div className="modal">
                <div className='modal-dialog'>
                    <div className='modal-body'>
                        <div className='modal-content'>
                          <LoginForm onClick={login}/>                            
                        </div>
                    </div>
                </div>
            </div>
        ,document.body)}        
    </div>
  );
};

export default Auth;