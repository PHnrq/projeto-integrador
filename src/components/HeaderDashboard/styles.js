import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 9.4rem;
    background-color: rgba(76, 149, 108, 0.9);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-inline: 8.2rem;

    .logout{
        width: 10rem;
        border-radius: 0.5rem;
        border: none;
        color: var(--secondary-color);
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.4rem;
        text-align: center;
        cursor: pointer;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        background-color: var(--button-color);
        margin-right: 3.2rem;
        padding: .6rem 0;
    }
    @media screen and (max-width: 768px) {
        height: 7.2rem;
        .header__logo {
            width: 9.3rem;
        }
        .logout {
            width: 7rem;
        }

    }

    @media screen and (max-width: 375px) {
        height: 6.3rem;
        justify-content: space-between;

        .header__logo {
        margin-left: -6rem;
        width: 9.5rem;
    }
    .logout {
        margin-right: -6rem;
        width: 6rem;
        font-size: 1.6rem;
    }
    }

    
`;