import React, { useRef, Component } from 'react';
import styles from './index.module.scss';

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.focusedElem = React.createRef();

    this.state = {
      showDropDown: false,
      selectedItem: '',
      items: [],
      focusIndex: null,
    };
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const items = this.props.items.filter((el) => {
      return el.title.toLowerCase().includes(value.toLowerCase());
    });

    this.setState({
      selectedItem: value,
      showDropDown: true,
      items:items,
      focusIndex: null,
    });
  };

  onRowClick = (item) => {
    this.setState({
      selectedItem: item,
      showDropDown: false,
      focusIndex: null,
    });
  };

  closeWindow = (e) => {
    if (this.state.showDropDown) {
      if (e.target.tagName == 'HTML') {
        this.setState((state) => {
            return { ...state, selectedItem: state.selectedItem || '', showDropDown: false };
        });
      };
    };
  };

  updateStateFromProps = () => {
    const { items } = this.props;
    this.setState(state => ({ ...state, items }));
  }

  componentDidMount() {
    document.addEventListener('click', this.closeWindow);
    this.updateStateFromProps();
  };

  componentWillUnmount = () => {
    document.removeEventListener('click', this.closeWindow);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items) {
      this.updateStateFromProps();
    };
    this.focusedElem.current?.scrollIntoViewIfNeeded();
  }

  focus = () => {
    (!this.state.showDropDown) ?
      this.setState({ showDropDown: true }) :
      this.setState({ showDropDown: false });


    if (this.props.searchable) {
      this.inputRef.current.focus();
    };
  };

  pressKey = (e) => {
    const { focusIndex, items } = this.state;
      if (e.key === "ArrowDown") {
        ((focusIndex === items.length - 1) || (focusIndex === null)) ?
        this.setState({ focusIndex: 0 }) :
        this.setState({ focusIndex: focusIndex + 1 });
    };

    if (e.key === "ArrowUp") {
        focusIndex === 0 ?
          this.setState({ focusIndex: items.length - 1 }) :
          this.setState({ focusIndex: focusIndex - 1 })
    };

    if (e.key === "Enter") {
      if (focusIndex !== null ) {
        this.setState({
          selectedItem: items[focusIndex],
          showDropDown: false,
          focusIndex: null,
        });
      };
    };
  };

  render() {
     return (
      <div onClick={this.focus} onKeyDown = {this.pressKey} tabIndex="0">
        {
          <div className={styles.dropDownConteiner}>
            <div className={styles.dropdownSelect}>
              <div className={styles.dropdownSelectLeft}>
                {this.state.selectedItem && (
                  <span className={styles.dropdownItemImg}>{this.state.selectedItem.icon}</span>
                )}
                {this.props.searchable ?
                  (
                    <input
                      placeholder='Select...'
                      ref={this.inputRef}
                      className={styles.input}
                      onChange={this.handleInputChange}
                      value={this.state.selectedItem.title}
                      style={{height: "20px"}}
                    />
                  )
                  :
                   (<div className={styles.dropdownSelectedText}>{this.state.selectedItem.title ? this.state.selectedItem.title : "Select..."}</div>)
                }
              </div>
                <span className={styles.dropdownArrow}> &#9660;</span>
            </div>
            {this.state.showDropDown &&
              <div className={styles.dropDownContent}>
                  {this.state.items.map((item, index) => {
                    const condition = index === this.state.focusIndex;
                    return (
                      <div
                        className={styles.dropDownItem}
                        key={item.key}
                        onClick={() => this.onRowClick(item)}
                        ref={condition ? this.focusedElem : null}
                      >
                        {item.icon && (
                          <div className={`${styles.row} ${(condition) ? styles.bgGray : styles.bgWhite}`}>
                            <span className={styles.dropdownItemImg}>{item.icon}</span>
                            <a>{item.title}</a>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            }
          </div>
        }
      </div>
    );
  };
};

export default DropDown;
