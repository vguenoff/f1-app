import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SelectSection = ({ selectedSection, onSelect }) => {
  const sections = ['Drivers', 'Constructors', 'Circuits'];
  return (
    <ul className="SelectSection">
  {/*     <li>*/}
  {/*       <NavLink*/}
  {/*         exact*/}
  {/*         activeClassName="active"*/}
  {/*         to="\"*/}
  {/*         onClick={() => onSelect('Drivers')}*/}
  {/*       >*/}
  {/*         Drivers*/}
  {/*       </NavLink>*/}
  {/*     </li>*/}
  {/*     <li>*/}
  {/*       <NavLink*/}
  {/*         exact*/}
  {/*         activeClassName="active"*/}
  {/*         to="\Constructors"*/}
  {/*         onClick={() => onSelect('Constructors')}*/}
  {/*       >*/}
  {/*         Constructors*/}
  {/*       </NavLink>*/}
  {/*     </li>*/}
  {/*     <li>*/}
  {/*       <NavLink*/}
  {/*         exact*/}
  {/*         activeClassName="active"*/}
  {/*         to="\Circuits"*/}
  {/*         onClick={() => onSelect('Circuits')}*/}
  {/*       >*/}
  {/*         Circuits*/}
  {/*       </NavLink>*/}
  {/*     </li>*/}
      {sections.map(section => (
        <li
          key={section}
          onClick={() => onSelect(section)}
          style={section === selectedSection ? { textDecoration: 'underline' } : null}
        >{section}</li>
      ))}
    </ul>
  );
};

export default SelectSection;
