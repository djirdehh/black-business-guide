import React from "react";
import styles from "./profile.module.scss";

const MAX_DESCRIPTION_LENGTH = 80;

function locationAndCountryText(location, country) {
  if (location && country) {
    return `${location}, ${country}`;
  } if (location) {
    return location;
  } if (country) {
    return country;
  } 
    return "";
  
}

function locationAndCountry(location, country) {
  if (location || country) {
    return (
      <p
        className={styles.item}
      >
        {locationAndCountryText(location, country)}
      </p>
    );
  }

  return null;
}

function truncateString(string) {
  if (!string) {
    return '';
  }

  const truncated = string.substr(0, MAX_DESCRIPTION_LENGTH);

  return `${truncated}...`;
} 

function prefaceLinkWithHTTPS(url) {
  if (url.indexOf('://') === -1) {
    return `https://${  url}`
  }

  return url
}

const Profile = props => {
  const { image, name, location, country, websiteUrl, categories, description, usesGiftCards, photoDescription } = props;

  // CSS makes it easy to truncate a single line of text, but not multiple lines of text
  // const description = "Premium custom jewlery handcrafted with precision with some longer text that needs to be truncated because it is too long to show the whole thing";

  const truncateDescription = description.length > MAX_DESCRIPTION_LENGTH;

  const descriptionToDisplay = truncateDescription ? truncateString(description) : description;

  const giftCardBadge = usesGiftCards ?
    <div className={styles.giftCardBadge}>Gift card only</div> : null;

  const linkDescriptionID = `${name.toLowerCase().replace(/[^\w]/gi, '')}-description`;

  return (
    <a
      className={styles.profile}
      href={prefaceLinkWithHTTPS(websiteUrl)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      aria-describedby={linkDescriptionID}
    >
      <span className={styles.profileFocusState }/>
      {giftCardBadge}
      <div style={{ backgroundImage: `url(${image})` }} className={styles.image} role="img" aria-label={photoDescription || ""} />
      <span id={linkDescriptionID} className={styles.visuallyHiddenDescription}>
        {`Located in ${locationAndCountryText(location, country)}. ${usesGiftCards ? 'Only setting gift cards.' : ''} ${description}`}
      </span>
      <div className={styles.card} aria-hidden>
        <div>
          <h2 className={styles.name}>{name}</h2>
          {locationAndCountry(location, country)}
          <p className={styles.profileDescription}>
            {descriptionToDisplay}
          </p>
        </div>
        <dl className={styles.filterTags}>
          {giftCardBadge ? (
            <>
              <dt className={styles.visuallyHiddenDescription}>{`Products currently available from ${name}:`}</dt>
              <dd>{giftCardBadge}</dd>
            </>
          ) : null}
          <dt className={styles.visuallyHiddenDescription}>{`Types of products sold by ${name}:`}</dt>
          {
            categories.length ? categories.map(category => {
              return <dd className={styles.filterTag}>{category}</dd>
            }): null
          }
        </dl>
      </div>
    </a>
  );
};

export default Profile;
