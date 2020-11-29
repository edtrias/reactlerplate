import React, { memo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ColorActions } from 'actions';
import './styles.scss';

const mapStateToProps = (state) => {
    return {
        colorIndex: state.color.colorIndex,
        colorSelected: state.color.colorSelected,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeColor: bindActionCreators(ColorActions, dispatch).changeColor,
    };
};

const App = memo(({ changeColor, colorSelected, colorIndex }) => {
    const onClick = () => {
        changeColor();
    };

    const style = {
        border: `1px solid ${colorSelected}`,
        borderRadius: colorIndex % 2 === 0 ? 0 : 20,
    };

    return (
        <div className="rp-container">
            <div className="rp-container__square" style={style} onClick={onClick} />
            <div className="rp-container__text">REACTLERPLATE</div>
        </div>
    );
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
