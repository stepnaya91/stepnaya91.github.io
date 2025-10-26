import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavigationState } from 'src/navigation/types';
import { useDispatch } from 'react-redux';
import { tokenActions } from '../../../store/slices/token';
import { LoginForm } from '../../components/auth/LoginForm/LoginForm';
import { createPortal } from 'react-dom';
import { RegForm } from 'src/components/auth/RegForm/RegForm';



const Auth: React.FC = () => {
  
  const [registration, setRegistration] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const login = () => {
    const state = location.state as NavigationState;
    dispatch(tokenActions.gen())
    
    navigate(state?.from || '/');
  };

  const showFields = () => {
      setRegistration(!registration);
  }

  return (
    <div>
      {createPortal(      
            <div className="modal">
                <div className='modal-dialog'>
                    <div className='modal-body'>
                        <div className='modal-content'>
                          {!registration&&
                            <>
                              <LoginForm onClick={login}/>
                              <a id="registration" onClick={showFields}>Зарегистрироваться</a>
                            </>
                          }
                          {registration&&
                            <>
                              <RegForm onClick={login}/>
                              <a id="cancel" onClick={showFields}>Отмена</a>
                            </>
                          }
                        </div>
                    </div>
                </div>
            </div>
        ,document.body)}        
    </div>
  );
};

export default Auth;