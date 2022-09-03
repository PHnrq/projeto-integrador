import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 7rem;
    background-color: var(--footer-color);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem;
    color: var(--secondary-color);
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;

    .footer__logo {
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 375px) {
        height: 6rem;

        .footer__logo {
            width: 9rem;
        }

    }
`;