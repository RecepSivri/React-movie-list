import '../App.css';
import LanguageSelector from '../components/languageSelector/languageSelector';
import './Header.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function Header() {
    const { t, i18n } = useTranslation();

    const onChange = (value: string) => {
        i18n.changeLanguage(value);
    }

  return (
      <header>
        <div className='row-layout-start-center header'>
            <div className='row-layout-start' style={{marginLeft: '20px', marginRight: '20px'}}>
                <div style={{color: 'orange', marginRight: '3px', fontSize: '20px', fontWeight: 'bolder'}} >RSMovie</div>
                <FontAwesomeIcon style={{color: 'orange', marginTop: '2px',  fontSize: '20px'}} icon={faFilm} />
            </div>
            <div className='category-container'>
                <Link className='header-button' to="/comedy">
                    {t('navbar.comedy')}
                </Link>
                <Link className='header-button' to="/horror">
                    {t('navbar.horror')}
                </Link>
                <Link className='header-button' to="/family">
                    {t('navbar.family')}
                </Link>
                <Link className='header-button' to="/dram">
                    {t('navbar.dram')}
                </Link>
                <Link className='header-button' to="/action">
                    {t('navbar.action')}
                </Link>
                <Link className='header-button' to="/documentary">
                    {t('navbar.documentary')}
                </Link>
                <Link className='header-button' to="/adventure">
                    {t('navbar.adventure')}
                </Link>
                <Link className='header-button' to="/history">
                    {t('navbar.history')}
                </Link>
                <Link className='header-button' to="/war">
                    {t('navbar.war')}
                </Link>
            </div>
            <div style={{marginLeft: '20px', marginRight: '20px'}}>
                <LanguageSelector onChange = {onChange} value= {'tr'}/>
            </div>

        </div>
      </header>
  );
}

export default Header;
