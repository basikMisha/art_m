import { BurgerMenu } from '../BurgerMenu';
import {
  StyledHeader,
  Container,
  LinkWrapper,
  StyledSpan,
  StyledLink,
  LinksContainer,
} from './styled';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
export const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <Container>
        <Link to={ROUTES.HOME}>
          <svg
            width="206"
            height="63"
            viewBox="0 0 206 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M66 44.6617H68.0974L73.0293 56.3805H73.1994L78.1312 44.6617H80.2286V58.7794H78.5847V48.0534H78.443L73.9079 58.7794H72.3207L67.7856 48.0534H67.6439V58.7794H66V44.6617ZM90.3847 54.4504V48.1912H92.0569V58.7794H90.3847V56.9871H90.2712C90.0161 57.5248 89.6193 57.9821 89.0808 58.3589C88.5423 58.7311 87.8621 58.9172 87.0401 58.9172C86.3598 58.9172 85.7551 58.7725 85.226 58.483C84.697 58.1889 84.2812 57.7477 83.9789 57.1595C83.6766 56.5666 83.5254 55.8199 83.5254 54.9191V48.1912H85.1977V54.8088C85.1977 55.5808 85.4197 56.1967 85.8638 56.6562C86.3125 57.1158 86.8841 57.3455 87.5786 57.3455C87.9943 57.3455 88.4171 57.2422 88.847 57.0353C89.2816 56.8286 89.6454 56.5115 89.9382 56.0841C90.2358 55.6567 90.3847 55.1121 90.3847 54.4504ZM102.829 50.5625L101.327 50.9761C101.233 50.7326 101.093 50.4958 100.909 50.2661C100.73 50.0317 100.484 49.8387 100.172 49.687C99.8604 49.5354 99.4612 49.4595 98.9747 49.4595C98.3086 49.4595 97.7535 49.6089 97.3095 49.9077C96.8701 50.2017 96.6504 50.5763 96.6504 51.0312C96.6504 51.4356 96.8016 51.7551 97.104 51.9895C97.4063 52.2238 97.8787 52.4191 98.5211 52.5754L100.137 52.9614C101.11 53.1911 101.835 53.5427 102.312 54.016C102.789 54.4848 103.028 55.0891 103.028 55.829C103.028 56.4356 102.848 56.9779 102.489 57.4559C102.135 57.9338 101.639 58.3106 101.001 58.5863C100.363 58.8621 99.6219 59 98.7762 59C97.6661 59 96.7473 58.7656 96.0197 58.2968C95.2923 57.8281 94.8317 57.1434 94.638 56.2427L96.2253 55.8566C96.3764 56.4265 96.6623 56.8538 97.0827 57.1388C97.5078 57.4237 98.063 57.5662 98.7479 57.5662C99.5274 57.5662 100.146 57.4053 100.604 57.0836C101.067 56.7574 101.299 56.3667 101.299 55.9118C101.299 55.5441 101.167 55.2362 100.902 54.9881C100.638 54.7353 100.231 54.5469 99.6832 54.4228L97.8692 54.0092C96.8725 53.7794 96.1403 53.4232 95.6725 52.9407C95.2096 52.4536 94.9781 51.8447 94.9781 51.114C94.9781 50.5165 95.1505 49.988 95.4954 49.5285C95.845 49.069 96.3198 48.7082 96.9197 48.4462C97.5244 48.1843 98.2093 48.0534 98.9747 48.0534C100.052 48.0534 100.897 48.2831 101.511 48.7427C102.13 49.2022 102.57 49.8089 102.829 50.5625ZM110.108 59C109.06 59 108.155 58.7748 107.395 58.3244C106.638 57.8695 106.056 57.2353 105.645 56.4218C105.238 55.6038 105.035 54.6526 105.035 53.568C105.035 52.4835 105.238 51.5276 105.645 50.7003C106.056 49.8685 106.627 49.2206 107.36 48.7564C108.096 48.2877 108.956 48.0534 109.939 48.0534C110.505 48.0534 111.065 48.1453 111.618 48.3291C112.171 48.5128 112.673 48.8116 113.127 49.2251C113.58 49.6342 113.942 50.1765 114.211 50.852C114.48 51.5276 114.615 52.3594 114.615 53.3474V54.0367H106.225V52.6305H112.915C112.915 52.033 112.792 51.5 112.546 51.0312C112.305 50.5625 111.96 50.1925 111.511 49.9214C111.067 49.6503 110.543 49.5147 109.939 49.5147C109.272 49.5147 108.697 49.6756 108.21 49.9972C107.728 50.3143 107.357 50.7279 107.097 51.238C106.837 51.7482 106.707 52.295 106.707 52.8787V53.8162C106.707 54.6158 106.849 55.2936 107.132 55.8497C107.42 56.4012 107.82 56.8217 108.33 57.1111C108.84 57.3961 109.433 57.5386 110.108 57.5386C110.548 57.5386 110.944 57.4788 111.299 57.3593C111.658 57.2353 111.967 57.0515 112.227 56.8079C112.487 56.5598 112.687 56.2518 112.83 55.8841L114.445 56.3254C114.275 56.8584 113.989 57.3272 113.587 57.7316C113.186 58.1314 112.69 58.444 112.1 58.6691C111.509 58.8896 110.846 59 110.108 59ZM124.018 54.4504V48.1912H125.69V58.7794H124.018V56.9871H123.905C123.65 57.5248 123.253 57.9821 122.714 58.3589C122.176 58.7311 121.496 58.9172 120.674 58.9172C119.994 58.9172 119.389 58.7725 118.86 58.483C118.33 58.1889 117.915 57.7477 117.613 57.1595C117.311 56.5666 117.159 55.8199 117.159 54.9191V48.1912H118.831V54.8088C118.831 55.5808 119.054 56.1967 119.498 56.6562C119.947 57.1158 120.517 57.3455 121.212 57.3455C121.628 57.3455 122.051 57.2422 122.481 57.0353C122.915 56.8286 123.279 56.5115 123.572 56.0841C123.87 55.6567 124.018 55.1121 124.018 54.4504ZM128.753 58.7794V48.1912H130.369V49.8456H130.51C130.738 49.2804 131.104 48.8415 131.609 48.5289C132.115 48.2119 132.721 48.0534 133.431 48.0534C134.148 48.0534 134.746 48.2119 135.223 48.5289C135.704 48.8415 136.081 49.2804 136.35 49.8456H136.463C136.742 49.2987 137.16 48.8645 137.717 48.5427C138.275 48.2165 138.943 48.0534 139.722 48.0534C140.696 48.0534 141.492 48.3498 142.111 48.9426C142.729 49.5308 143.039 50.4476 143.039 51.693V58.7794H141.366V51.693C141.366 50.9117 141.147 50.3534 140.708 50.0179C140.268 49.6825 139.751 49.5147 139.156 49.5147C138.39 49.5147 137.798 49.7399 137.378 50.1903C136.957 50.636 136.746 51.2013 136.746 51.886V58.7794H135.046V51.5276C135.046 50.9255 134.845 50.4407 134.443 50.073C134.042 49.7008 133.524 49.5147 132.892 49.5147C132.457 49.5147 132.051 49.6273 131.673 49.8525C131.3 50.0777 130.997 50.3901 130.766 50.79C130.539 51.1852 130.426 51.6425 130.426 52.1617V58.7794H128.753ZM156.131 59C155.148 59 154.286 58.7725 153.544 58.3175C152.807 57.8626 152.231 57.2261 151.814 56.4081C151.404 55.59 151.199 54.6342 151.199 53.5405C151.199 52.4375 151.404 51.4748 151.814 50.6521C152.231 49.8295 152.807 49.1907 153.544 48.7358C154.286 48.2808 155.148 48.0534 156.131 48.0534C157.113 48.0534 157.972 48.2808 158.71 48.7358C159.451 49.1907 160.028 49.8295 160.439 50.6521C160.855 51.4748 161.062 52.4375 161.062 53.5405C161.062 54.6342 160.855 55.59 160.439 56.4081C160.028 57.2261 159.451 57.8626 158.71 58.3175C157.972 58.7725 157.113 59 156.131 59ZM156.131 57.5386C156.877 57.5386 157.49 57.3524 157.972 56.9802C158.454 56.608 158.811 56.1185 159.043 55.5119C159.274 54.9053 159.39 54.2481 159.39 53.5405C159.39 52.8327 159.274 52.1733 159.043 51.562C158.811 50.9508 158.454 50.4568 157.972 50.0799C157.49 49.7032 156.877 49.5147 156.131 49.5147C155.384 49.5147 154.77 49.7032 154.288 50.0799C153.806 50.4568 153.45 50.9508 153.218 51.562C152.987 52.1733 152.871 52.8327 152.871 53.5405C152.871 54.2481 152.987 54.9053 153.218 55.5119C153.45 56.1185 153.806 56.608 154.288 56.9802C154.77 57.3524 155.384 57.5386 156.131 57.5386ZM168.461 48.1912V49.5699H162.595V48.1912H168.461ZM164.352 58.7794V46.7298C164.352 46.1232 164.498 45.6177 164.791 45.2132C165.084 44.8089 165.464 44.5056 165.932 44.3033C166.4 44.1011 166.893 44 167.413 44C167.824 44 168.159 44.0322 168.419 44.0966C168.679 44.1608 168.872 44.2206 169 44.2757L168.518 45.682C168.433 45.6545 168.316 45.62 168.164 45.5786C168.017 45.5372 167.824 45.5165 167.583 45.5165C167.031 45.5165 166.631 45.6521 166.385 45.9233C166.145 46.1944 166.024 46.5919 166.024 47.1159V58.7794H164.352Z"
              fill="white"
            />
            <path
              d="M179.25 58.8534H176L180.952 45H184.859L189.803 58.8534H186.553L182.961 48.1657H182.849L179.25 58.8534ZM179.047 53.4081H186.722V55.6944H179.047V53.4081ZM191.474 58.8534V48.4634H194.366V50.2762H194.478C194.674 49.6313 195.003 49.1443 195.465 48.8151C195.928 48.4814 196.46 48.3146 197.062 48.3146C197.212 48.3146 197.372 48.3236 197.545 48.3417C197.718 48.3597 197.87 48.3844 198 48.416V50.973C197.86 50.9323 197.667 50.8963 197.42 50.8647C197.172 50.8332 196.945 50.8174 196.74 50.8174C196.301 50.8174 195.909 50.9098 195.563 51.0947C195.223 51.2751 194.952 51.5276 194.751 51.8523C194.555 52.177 194.457 52.5512 194.457 52.9752V58.8534H191.474ZM205.804 48.4634V50.6279H199.326V48.4634H205.804ZM200.797 45.9741H203.779V55.6606C203.779 55.9267 203.822 56.1341 203.906 56.2829C203.989 56.4273 204.107 56.5287 204.256 56.5873C204.41 56.646 204.587 56.6753 204.788 56.6753C204.928 56.6753 205.068 56.664 205.208 56.6415C205.348 56.6143 205.456 56.5941 205.531 56.5805L206 58.7249C205.85 58.7699 205.64 58.8218 205.369 58.8804C205.099 58.9436 204.769 58.9819 204.382 58.9954C203.663 59.0225 203.033 58.93 202.491 58.7181C201.954 58.5061 201.536 58.177 201.237 57.7305C200.939 57.2841 200.792 56.7203 200.797 56.0395V45.9741Z"
              fill="#E0A449"
            />
            <path
              d="M8 58H56"
              stroke="#E0A449"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 47V29"
              stroke="#E0A449"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27 47V29"
              stroke="#E0A449"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M37 47V29"
              stroke="#E0A449"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M48 47V29"
              stroke="#E0A449"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M32.4999 5L54 18H11L32.4999 5Z"
              stroke="#E0A449"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <LinksContainer>
          {location.pathname !== ROUTES.HOME && (
            <StyledLink to={ROUTES.HOME}>
              <LinkWrapper>
                <div>
                  <svg
                    width="24.000000"
                    height="24.000000"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <clipPath id="clip1_214">
                        <rect
                          id="home"
                          rx="0.000000"
                          width="23.000000"
                          height="23.000000"
                          transform="translate(0.500000 0.500000)"
                          fill="white"
                          fill-opacity="0"
                        />
                      </clipPath>
                    </defs>
                    <rect
                      id="home"
                      rx="0.000000"
                      width="23.000000"
                      height="23.000000"
                      transform="translate(0.500000 0.500000)"
                      fill="#FFFFFF"
                      fill-opacity="0"
                    />
                    <g clip-path="url(#clip1_214)">
                      <path
                        id="Vector"
                        d="M12 2L21 9L21 20C21 20.53 20.78 21.03 20.41 21.41C20.03 21.78 19.53 22 19 22L5 22C4.46 22 3.96 21.78 3.58 21.41C3.21 21.03 3 20.53 3 20L3 9L12 2Z"
                        stroke="#E0A449"
                        stroke-opacity="1.000000"
                        stroke-width="2.000000"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector"
                        d="M9 22L9 12L15 12L15 22"
                        stroke="#E0A449"
                        stroke-opacity="1.000000"
                        stroke-width="2.000000"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      />
                    </g>
                  </svg>
                </div>
                <StyledSpan>Home</StyledSpan>
              </LinkWrapper>
            </StyledLink>
          )}
          <StyledLink to={ROUTES.FAVORITES}>
            <LinkWrapper>
              <div>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 21.5L12.375 17.5L5.25 21.5V5.5C5.25 4.96957 5.46448 4.46086 5.84625 4.08579C6.22802 3.71071 6.74581 3.5 7.28571 3.5H17.4643C18.0042 3.5 18.522 3.71071 18.9038 4.08579C19.2855 4.46086 19.5 4.96957 19.5 5.5V21.5Z"
                    stroke="#E0A449"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <StyledSpan>Your favorites</StyledSpan>
            </LinkWrapper>
          </StyledLink>
        </LinksContainer>
        <BurgerMenu />
      </Container>
    </StyledHeader>
  );
};
