import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import { ICONS } from '../../models/Icons';
import { DELIVERY } from '../../types/deliveryOptions';
import { LOCALES } from '../../types/locales';
import '../styles/Button.css';
import './EcoStationModal.css';
import '../styles/CustomPopup.css';
import { useIntl } from 'react-intl';

const displayAcceptedGarbageTypes = (wasteTypes) => {
  return ICONS.map((icon) => wasteTypes.includes(icon.key) && icon.component(null, true, true));
};

const messages = {
  acceptedGarbageID: 'modal_acceptedGarbageTypes',
  paymentConditionsID: 'modal_paymentConditions',
  deliveryOptionsID: 'modal_deliveryOptions',
  contactPhone: 'modal_contactPhone',
  workingHours: 'modal_workingHours',
  mondayFriday: 'modal_mondayFriday',
  saturday: 'modal_saturday',
  sunday: 'modal_sunday',
  dayOff: 'modal_dayOff',
  notSpecified: 'modal_notSpecified',
  unknownID: 'unknownId',
  paidID: 'paidId',
  freeID: 'freeId',
};

const EcoStationModal = ({
  address,
  addressRu,
  ecoStationName,
  rating,
  wasteTypes,
  deliveryOptions,
  deliveryOptionsRu,
  ...props
}) => {
  const intl = useIntl();
  return (
    <>
      <div
        className={`${props.show ? 'Overlay' : ''}`}
        onClick={() => {
          props.setShowModal(false);
          props.setSelectedMarker(false);
        }}
      ></div>
      <div className={`MainContainer ${props.show ? 'active' : ''}`}>
        <div className='Stars'>
          <StarRatings
            rating={rating ? +rating : 0}
            starSpacing='1px'
            starDimension='1.2rem'
            starRatedColor='#00db7a'
            numberOfStars={5}
            name='rating'
          />
        </div>
        <h4 className='StationTitl'>
          {ecoStationName ? ecoStationName : intl.formatMessage({ id: messages.unknownID })}
        </h4>
        <i className='fas fa-map-marker-alt location'>
          <span>
            {props.locale === LOCALES.ENGLISH
              ? address
                ? address
                : intl.formatMessage({ id: messages.unknownID })
              : addressRu
              ? addressRu
              : intl.formatMessage({ id: messages.unknownID })}
          </span>
        </i>
        <hr />
        <h4 className='ModalTitle'>{intl.formatMessage({ id: messages.contactPhone })}</h4>
        <div className='ContactPhone'>
          <i className='fas fa-phone-volume'></i>
          <span>{props.contact === '-' ? intl.formatMessage({ id: messages.notSpecified }) : props.contact}</span>
        </div>
        <h4 className='ModalTitle'>{intl.formatMessage({ id: messages.workingHours })}</h4>
        <div className='WorkingHours'>
          <i className='far fa-clock'></i>
          <div className='WorkingHoursTexts'>
            <span>
              {intl.formatMessage({ id: messages.mondayFriday })} {props.workingHours[0]}
            </span>
            <span>
              {intl.formatMessage({ id: messages.saturday })}{' '}
              {props.workingHours[props.workingHours.length - 2] === '-'
                ? intl.formatMessage({ id: messages.dayOff })
                : props.workingHours[props.workingHours.length - 2]}
            </span>
            <span>
              {intl.formatMessage({ id: messages.sunday })}{' '}
              {props.workingHours[props.workingHours.length - 2] === '-'
                ? intl.formatMessage({ id: messages.dayOff })
                : props.workingHours[props.workingHours.length - 2]}
            </span>
          </div>
        </div>
        <hr />
        <h4 className='ModalTitle'>{intl.formatMessage({ id: messages.acceptedGarbageID })}</h4>
        <div className='SpecificGarbageTypes'>{displayAcceptedGarbageTypes(wasteTypes)}</div>
        <hr />
        <h4 className='ModalTitle'>{intl.formatMessage({ id: messages.deliveryOptionsID })}</h4>
        <div className='DeliveryOpt'>
          {deliveryOptions.map((option, index) => (
            <div key={`list_${index}`}>
              {option === DELIVERY.selfDelivery ? <i className='fas fa-car'></i> : <i className='fas fa-taxi'></i>}
              <span>{props.locale === LOCALES.ENGLISH ? option : deliveryOptionsRu[index]}</span>
            </div>
          ))}
        </div>

        <h4 className='ModalTitle'>{intl.formatMessage({ id: messages.paymentConditionsID })}</h4>
        <div className='PaymentCondition'>
          {deliveryOptions.map((option, index) => (
            <div key={`list_${index}`}>
              {option === DELIVERY.selfDelivery ? (
                <i className='fas fa-hand-holding-usd'></i>
              ) : (
                <i className='fas fa-money-bill'></i>
              )}
              <span>
                {option === DELIVERY.selfDelivery
                  ? intl.formatMessage({ id: messages.freeID })
                  : intl.formatMessage({ id: messages.paidID })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

EcoStationModal.propTypes = {
  onHide: PropTypes.func,
  ecoStationName: PropTypes.string,
  rating: PropTypes.number,
  wasteTypes: PropTypes.array,
  deliveryOptions: PropTypes.array,
  paymentCondition: PropTypes.object,
  show: PropTypes.bool,
  setShowModal: PropTypes.func,
  setSelectedMarker: PropTypes.func,
  address: PropTypes.string,
  workingHours: PropTypes.array,
  contact: PropTypes.string,
  locale: PropTypes.string,
  addressRu: PropTypes.string,
  deliveryOptionsRu: PropTypes.array,
};
export default EcoStationModal;
