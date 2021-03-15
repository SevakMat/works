import React, { Component } from 'react';
import DropDown from './DropDown';
import styles from './index.module.scss';


class Icon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <img src={this.props.url} />;
  }
}

const dropList = [
  {
    title: 'Mark Zuckerberg',
    icon: (
      <Icon
        url={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Approve_icon.svg/1024px-Approve_icon.svg.png'
        }
      />
    ),
    key: '1'
  },
  {
    title: 'Fidel Castro',
    icon: (
      <Icon url={'https://static.thenounproject.com/png/3183052-200.png'} />
    ),
    key: '2'
  },
  {
    title: 'Mark Tomy',
    icon: (
      <Icon
        url={
          'https://citomed.am/wp-content/uploads/2020/07/pngtree-vector-location-icon-png-image_515424.jpg'
        }
      />
    ),
    key: '3'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '4'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '5'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '6'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '7'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '8'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '9'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '10'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '11'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '12'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '13'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '14'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '15'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '16'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '17'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '18'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '19'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '20'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '21'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '22'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '23'
  },
  {
    title: 'Mark Antony',
    icon: (
      <Icon
        url={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsvJJJVCK_huiEAFvFmfH55FbYO1RhUBtoA&usqp=CAU'
        }
      />
    ),
    key: '24'
  },
];

class RenderDropDown extends Component {
  render() {
    return (
      <div className={styles.exampleContent}>
        <div className={styles.exampleDropdown}>
          <DropDown items={dropList} searchable={true} />
        </div>
      </div>
    );
  };
};

export default RenderDropDown;
