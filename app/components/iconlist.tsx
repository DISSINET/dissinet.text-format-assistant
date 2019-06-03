import * as React from "react";

type Props = {};

export default class IconListComponent extends React.Component<Props> {
  props;

  constructor(props) {
    super(props);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.props.changeHtml(e.target.value);
  }

  render() {
    console.log("sat");
    return (
      <div className="icon-list-wrapper" data-testid="icon-list">
        <h1 className="subheading text-muni">Icon List</h1>
        <table>
          {iconCss.split("}").map((iconStr, ii) => {
            const iconClass = iconStr.substr(2, iconStr.indexOf(":") - 2);

            return (
              <tr className="icon-one" key={ii}>
                <td className="icon-picture">
                  <i className={"icon " + iconClass} />
                </td>
                <td className="icon-classname">{iconClass}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

const iconCss = `
.icon-abacus:before {
  content: "";
}
.icon-accessible-icon:before {
  content: "";
}
.icon-accusoft:before {
  content: "";
}
.icon-acorn:before {
  content: "";
}
.icon-acquisitions-incorporated:before {
  content: "";
}
.icon-ad:before {
  content: "";
}
.icon-address-book:before {
  content: "";
}
.icon-address-card:before {
  content: "";
}
.icon-adjust:before {
  content: "";
}
.icon-adn:before {
  content: "";
}
.icon-adobe:before {
  content: "";
}
.icon-adversal:before {
  content: "";
}
.icon-affiliatetheme:before {
  content: "";
}
.icon-air-freshener:before {
  content: "";
}
.icon-alarm-clock:before {
  content: "";
}
.icon-algolia:before {
  content: "";
}
.icon-alicorn:before {
  content: "";
}
.icon-align-center:before {
  content: "";
}
.icon-align-justify:before {
  content: "";
}
.icon-align-left:before {
  content: "";
}
.icon-align-right:before {
  content: "";
}
.icon-alipay:before {
  content: "";
}
.icon-allergies:before {
  content: "";
}
.icon-amazon:before {
  content: "";
}
.icon-amazon-pay:before {
  content: "";
}
.icon-ambulance:before {
  content: "";
}
.icon-american-sign-language-interpreting:before {
  content: "";
}
.icon-amilia:before {
  content: "";
}
.icon-analytics:before {
  content: "";
}
.icon-anchor:before {
  content: "";
}
.icon-android:before {
  content: "";
}
.icon-angel:before {
  content: "";
}
.icon-angellist:before {
  content: "";
}
.icon-angle-double-down:before {
  content: "";
}
.icon-angle-double-left:before {
  content: "";
}
.icon-angle-double-right:before {
  content: "";
}
.icon-angle-double-up:before {
  content: "";
}
.icon-angle-down:before {
  content: "";
}
.icon-angle-left:before {
  content: "";
}
.icon-angle-right:before {
  content: "";
}
.icon-angle-up:before {
  content: "";
}
.icon-angry:before {
  content: "";
}
.icon-angrycreative:before {
  content: "";
}
.icon-angular:before {
  content: "";
}
.icon-ankh:before {
  content: "";
}
.icon-app-store:before {
  content: "";
}
.icon-app-store-ios:before {
  content: "";
}
.icon-apper:before {
  content: "";
}
.icon-apple:before {
  content: "";
}
.icon-apple-alt:before {
  content: "";
}
.icon-apple-crate:before {
  content: "";
}
.icon-apple-pay:before {
  content: "";
}
.icon-archive:before {
  content: "";
}
.icon-archway:before {
  content: "";
}
.icon-arrow-alt-circle-down:before {
  content: "";
}
.icon-arrow-alt-circle-left:before {
  content: "";
}
.icon-arrow-alt-circle-right:before {
  content: "";
}
.icon-arrow-alt-circle-up:before {
  content: "";
}
.icon-arrow-alt-down:before {
  content: "";
}
.icon-arrow-alt-from-bottom:before {
  content: "";
}
.icon-arrow-alt-from-left:before {
  content: "";
}
.icon-arrow-alt-from-right:before {
  content: "";
}
.icon-arrow-alt-from-top:before {
  content: "";
}
.icon-arrow-alt-left:before {
  content: "";
}
.icon-arrow-alt-right:before {
  content: "";
}
.icon-arrow-alt-square-down:before {
  content: "";
}
.icon-arrow-alt-square-left:before {
  content: "";
}
.icon-arrow-alt-square-right:before {
  content: "";
}
.icon-arrow-alt-square-up:before {
  content: "";
}
.icon-arrow-alt-to-bottom:before {
  content: "";
}
.icon-arrow-alt-to-left:before {
  content: "";
}
.icon-arrow-alt-to-right:before {
  content: "";
}
.icon-arrow-alt-to-top:before {
  content: "";
}
.icon-arrow-alt-up:before {
  content: "";
}
.icon-arrow-circle-down:before {
  content: "";
}
.icon-arrow-circle-left:before {
  content: "";
}
.icon-arrow-circle-right:before {
  content: "";
}
.icon-arrow-circle-up:before {
  content: "";
}
.icon-arrow-down:before {
  content: "";
}
.icon-arrow-from-bottom:before {
  content: "";
}
.icon-arrow-from-left:before {
  content: "";
}
.icon-arrow-from-right:before {
  content: "";
}
.icon-arrow-from-top:before {
  content: "";
}
.icon-arrow-left:before {
  content: "";
}
.icon-arrow-right:before {
  content: "";
}
.icon-arrow-square-down:before {
  content: "";
}
.icon-arrow-square-left:before {
  content: "";
}
.icon-arrow-square-right:before {
  content: "";
}
.icon-arrow-square-up:before {
  content: "";
}
.icon-arrow-to-bottom:before {
  content: "";
}
.icon-arrow-to-left:before {
  content: "";
}
.icon-arrow-to-right:before {
  content: "";
}
.icon-arrow-to-top:before {
  content: "";
}
.icon-arrow-up:before {
  content: "";
}
.icon-arrows:before {
  content: "";
}
.icon-arrows-alt:before {
  content: "";
}
.icon-arrows-alt-h:before {
  content: "";
}
.icon-arrows-alt-v:before {
  content: "";
}
.icon-arrows-h:before {
  content: "";
}
.icon-arrows-v:before {
  content: "";
}
.icon-artstation:before {
  content: "";
}
.icon-assistive-listening-systems:before {
  content: "";
}
.icon-asterisk:before {
  content: "";
}
.icon-asymmetrik:before {
  content: "";
}
.icon-at:before {
  content: "";
}
.icon-atlas:before {
  content: "";
}
.icon-atlassian:before {
  content: "";
}
.icon-atom:before {
  content: "";
}
.icon-atom-alt:before {
  content: "";
}
.icon-audible:before {
  content: "";
}
.icon-audio-description:before {
  content: "";
}
.icon-autoprefixer:before {
  content: "";
}
.icon-avianex:before {
  content: "";
}
.icon-aviato:before {
  content: "";
}
.icon-award:before {
  content: "";
}
.icon-aws:before {
  content: "";
}
.icon-axe:before {
  content: "";
}
.icon-axe-battle:before {
  content: "";
}
.icon-baby:before {
  content: "";
}
.icon-baby-carriage:before {
  content: "";
}
.icon-backpack:before {
  content: "";
}
.icon-backspace:before {
  content: "";
}
.icon-backward:before {
  content: "";
}
.icon-badge:before {
  content: "";
}
.icon-badge-check:before {
  content: "";
}
.icon-badge-dollar:before {
  content: "";
}
.icon-badge-percent:before {
  content: "";
}
.icon-badger-honey:before {
  content: "";
}
.icon-balance-scale:before {
  content: "";
}
.icon-balance-scale-left:before {
  content: "";
}
.icon-balance-scale-right:before {
  content: "";
}
.icon-ball-pile:before {
  content: "";
}
.icon-ballot:before {
  content: "";
}
.icon-ballot-check:before {
  content: "";
}
.icon-ban:before {
  content: "";
}
.icon-band-aid:before {
  content: "";
}
.icon-bandcamp:before {
  content: "";
}
.icon-barcode:before {
  content: "";
}
.icon-barcode-alt:before {
  content: "";
}
.icon-barcode-read:before {
  content: "";
}
.icon-barcode-scan:before {
  content: "";
}
.icon-bars:before {
  content: "";
}
.icon-baseball:before {
  content: "";
}
.icon-baseball-ball:before {
  content: "";
}
.icon-basketball-ball:before {
  content: "";
}
.icon-basketball-hoop:before {
  content: "";
}
.icon-bat:before {
  content: "";
}
.icon-bath:before {
  content: "";
}
.icon-battery-bolt:before {
  content: "";
}
.icon-battery-empty:before {
  content: "";
}
.icon-battery-full:before {
  content: "";
}
.icon-battery-half:before {
  content: "";
}
.icon-battery-quarter:before {
  content: "";
}
.icon-battery-slash:before {
  content: "";
}
.icon-battery-three-quarters:before {
  content: "";
}
.icon-bed:before {
  content: "";
}
.icon-beer:before {
  content: "";
}
.icon-behance:before {
  content: "";
}
.icon-behance-square:before {
  content: "";
}
.icon-bell:before {
  content: "";
}
.icon-bell-school:before {
  content: "";
}
.icon-bell-school-slash:before {
  content: "";
}
.icon-bell-slash:before {
  content: "";
}
.icon-bells:before {
  content: "";
}
.icon-bezier-curve:before {
  content: "";
}
.icon-bible:before {
  content: "";
}
.icon-bicycle:before {
  content: "";
}
.icon-bimobject:before {
  content: "";
}
.icon-binoculars:before {
  content: "";
}
.icon-biohazard:before {
  content: "";
}
.icon-birthday-cake:before {
  content: "";
}
.icon-bitbucket:before {
  content: "";
}
.icon-bitcoin:before {
  content: "";
}
.icon-bity:before {
  content: "";
}
.icon-black-tie:before {
  content: "";
}
.icon-blackberry:before {
  content: "";
}
.icon-blanket:before {
  content: "";
}
.icon-blender:before {
  content: "";
}
.icon-blender-phone:before {
  content: "";
}
.icon-blind:before {
  content: "";
}
.icon-blog:before {
  content: "";
}
.icon-blogger:before {
  content: "";
}
.icon-blogger-b:before {
  content: "";
}
.icon-bluetooth:before {
  content: "";
}
.icon-bluetooth-b:before {
  content: "";
}
.icon-bold:before {
  content: "";
}
.icon-bolt:before {
  content: "";
}
.icon-bomb:before {
  content: "";
}
.icon-bone:before {
  content: "";
}
.icon-bone-break:before {
  content: "";
}
.icon-bong:before {
  content: "";
}
.icon-book:before {
  content: "";
}
.icon-book-alt:before {
  content: "";
}
.icon-book-dead:before {
  content: "";
}
.icon-book-heart:before {
  content: "";
}
.icon-book-open:before {
  content: "";
}
.icon-book-reader:before {
  content: "";
}
.icon-book-spells:before {
  content: "";
}
.icon-bookmark:before {
  content: "";
}
.icon-books:before {
  content: "";
}
.icon-boot:before {
  content: "";
}
.icon-booth-curtain:before {
  content: "";
}
.icon-bow-arrow:before {
  content: "";
}
.icon-bowling-ball:before {
  content: "";
}
.icon-bowling-pins:before {
  content: "";
}
.icon-box:before {
  content: "";
}
.icon-box-alt:before {
  content: "";
}
.icon-box-ballot:before {
  content: "";
}
.icon-box-check:before {
  content: "";
}
.icon-box-fragile:before {
  content: "";
}
.icon-box-full:before {
  content: "";
}
.icon-box-heart:before {
  content: "";
}
.icon-box-open:before {
  content: "";
}
.icon-box-up:before {
  content: "";
}
.icon-box-usd:before {
  content: "";
}
.icon-boxes:before {
  content: "";
}
.icon-boxes-alt:before {
  content: "";
}
.icon-boxing-glove:before {
  content: "";
}
.icon-braille:before {
  content: "";
}
.icon-brain:before {
  content: "";
}
.icon-briefcase:before {
  content: "";
}
.icon-briefcase-medical:before {
  content: "";
}
.icon-broadcast-tower:before {
  content: "";
}
.icon-broom:before {
  content: "";
}
.icon-browser:before {
  content: "";
}
.icon-brush:before {
  content: "";
}
.icon-btc:before {
  content: "";
}
.icon-bug:before {
  content: "";
}
.icon-building:before {
  content: "";
}
.icon-bullhorn:before {
  content: "";
}
.icon-bullseye:before {
  content: "";
}
.icon-bullseye-arrow:before {
  content: "";
}
.icon-bullseye-pointer:before {
  content: "";
}
.icon-burn:before {
  content: "";
}
.icon-buromobelexperte:before {
  content: "";
}
.icon-bus:before {
  content: "";
}
.icon-bus-alt:before {
  content: "";
}
.icon-bus-school:before {
  content: "";
}
.icon-business-time:before {
  content: "";
}
.icon-buysellads:before {
  content: "";
}
.icon-cabinet-filing:before {
  content: "";
}
.icon-calculator:before {
  content: "";
}
.icon-calculator-alt:before {
  content: "";
}
.icon-calendar:before {
  content: "";
}
.icon-calendar-alt:before {
  content: "";
}
.icon-calendar-check:before {
  content: "";
}
.icon-calendar-day:before {
  content: "";
}
.icon-calendar-edit:before {
  content: "";
}
.icon-calendar-exclamation:before {
  content: "";
}
.icon-calendar-minus:before {
  content: "";
}
.icon-calendar-plus:before {
  content: "";
}
.icon-calendar-star:before {
  content: "";
}
.icon-calendar-times:before {
  content: "";
}
.icon-calendar-week:before {
  content: "";
}
.icon-camera:before {
  content: "";
}
.icon-camera-alt:before {
  content: "";
}
.icon-camera-retro:before {
  content: "";
}
.icon-campfire:before {
  content: "";
}
.icon-campground:before {
  content: "";
}
.icon-canadian-maple-leaf:before {
  content: "";
}
.icon-candle-holder:before {
  content: "";
}
.icon-candy-cane:before {
  content: "";
}
.icon-candy-corn:before {
  content: "";
}
.icon-cannabis:before {
  content: "";
}
.icon-capsules:before {
  content: "";
}
.icon-car:before {
  content: "";
}
.icon-car-alt:before {
  content: "";
}
.icon-car-battery:before {
  content: "";
}
.icon-car-bump:before {
  content: "";
}
.icon-car-crash:before {
  content: "";
}
.icon-car-garage:before {
  content: "";
}
.icon-car-mechanic:before {
  content: "";
}
.icon-car-side:before {
  content: "";
}
.icon-car-tilt:before {
  content: "";
}
.icon-car-wash:before {
  content: "";
}
.icon-caret-circle-down:before {
  content: "";
}
.icon-caret-circle-left:before {
  content: "";
}
.icon-caret-circle-right:before {
  content: "";
}
.icon-caret-circle-up:before {
  content: "";
}
.icon-caret-down:before {
  content: "";
}
.icon-caret-left:before {
  content: "";
}
.icon-caret-right:before {
  content: "";
}
.icon-caret-square-down:before {
  content: "";
}
.icon-caret-square-left:before {
  content: "";
}
.icon-caret-square-right:before {
  content: "";
}
.icon-caret-square-up:before {
  content: "";
}
.icon-caret-up:before {
  content: "";
}
.icon-carrot:before {
  content: "";
}
.icon-cart-arrow-down:before {
  content: "";
}
.icon-cart-plus:before {
  content: "";
}
.icon-cash-register:before {
  content: "";
}
.icon-cat:before {
  content: "";
}
.icon-cauldron:before {
  content: "";
}
.icon-cc-amazon-pay:before {
  content: "";
}
.icon-cc-amex:before {
  content: "";
}
.icon-cc-apple-pay:before {
  content: "";
}
.icon-cc-diners-club:before {
  content: "";
}
.icon-cc-discover:before {
  content: "";
}
.icon-cc-jcb:before {
  content: "";
}
.icon-cc-mastercard:before {
  content: "";
}
.icon-cc-paypal:before {
  content: "";
}
.icon-cc-stripe:before {
  content: "";
}
.icon-cc-visa:before {
  content: "";
}
.icon-centercode:before {
  content: "";
}
.icon-centos:before {
  content: "";
}
.icon-certificate:before {
  content: "";
}
.icon-chair:before {
  content: "";
}
.icon-chair-office:before {
  content: "";
}
.icon-chalkboard:before {
  content: "";
}
.icon-chalkboard-teacher:before {
  content: "";
}
.icon-charging-station:before {
  content: "";
}
.icon-chart-area:before {
  content: "";
}
.icon-chart-bar:before {
  content: "";
}
.icon-chart-line:before {
  content: "";
}
.icon-chart-line-down:before {
  content: "";
}
.icon-chart-network:before {
  content: "";
}
.icon-chart-pie:before {
  content: "";
}
.icon-chart-pie-alt:before {
  content: "";
}
.icon-check:before {
  content: "";
}
.icon-check-circle:before {
  content: "";
}
.icon-check-double:before {
  content: "";
}
.icon-check-square:before {
  content: "";
}
.icon-chess:before {
  content: "";
}
.icon-chess-bishop:before {
  content: "";
}
.icon-chess-bishop-alt:before {
  content: "";
}
.icon-chess-board:before {
  content: "";
}
.icon-chess-clock:before {
  content: "";
}
.icon-chess-clock-alt:before {
  content: "";
}
.icon-chess-king:before {
  content: "";
}
.icon-chess-king-alt:before {
  content: "";
}
.icon-chess-knight:before {
  content: "";
}
.icon-chess-knight-alt:before {
  content: "";
}
.icon-chess-pawn:before {
  content: "";
}
.icon-chess-pawn-alt:before {
  content: "";
}
.icon-chess-queen:before {
  content: "";
}
.icon-chess-queen-alt:before {
  content: "";
}
.icon-chess-rook:before {
  content: "";
}
.icon-chess-rook-alt:before {
  content: "";
}
.icon-chevron-circle-down:before {
  content: "";
}
.icon-chevron-circle-left:before {
  content: "";
}
.icon-chevron-circle-right:before {
  content: "";
}
.icon-chevron-circle-up:before {
  content: "";
}
.icon-chevron-double-down:before {
  content: "";
}
.icon-chevron-double-left:before {
  content: "";
}
.icon-chevron-double-right:before {
  content: "";
}
.icon-chevron-double-up:before {
  content: "";
}
.icon-chevron-down:before {
  content: "";
}
.icon-chevron-left:before {
  content: "";
}
.icon-chevron-right:before {
  content: "";
}
.icon-chevron-square-down:before {
  content: "";
}
.icon-chevron-square-left:before {
  content: "";
}
.icon-chevron-square-right:before {
  content: "";
}
.icon-chevron-square-up:before {
  content: "";
}
.icon-chevron-up:before {
  content: "";
}
.icon-child:before {
  content: "";
}
.icon-chimney:before {
  content: "";
}
.icon-chrome:before {
  content: "";
}
.icon-church:before {
  content: "";
}
.icon-circle:before {
  content: "";
}
.icon-circle-notch:before {
  content: "";
}
.icon-city:before {
  content: "";
}
.icon-claw-marks:before {
  content: "";
}
.icon-clipboard:before {
  content: "";
}
.icon-clipboard-check:before {
  content: "";
}
.icon-clipboard-list:before {
  content: "";
}
.icon-clipboard-list-check:before {
  content: "";
}
.icon-clipboard-prescription:before {
  content: "";
}
.icon-clock:before {
  content: "";
}
.icon-clone:before {
  content: "";
}
.icon-closed-captioning:before {
  content: "";
}
.icon-cloud:before {
  content: "";
}
.icon-cloud-download:before {
  content: "";
}
.icon-cloud-download-alt:before {
  content: "";
}
.icon-cloud-drizzle:before {
  content: "";
}
.icon-cloud-hail:before {
  content: "";
}
.icon-cloud-hail-mixed:before {
  content: "";
}
.icon-cloud-meatball:before {
  content: "";
}
.icon-cloud-moon:before {
  content: "";
}
.icon-cloud-moon-rain:before {
  content: "";
}
.icon-cloud-rain:before {
  content: "";
}
.icon-cloud-rainbow:before {
  content: "";
}
.icon-cloud-showers:before {
  content: "";
}
.icon-cloud-showers-heavy:before {
  content: "";
}
.icon-cloud-sleet:before {
  content: "";
}
.icon-cloud-snow:before {
  content: "";
}
.icon-cloud-sun:before {
  content: "";
}
.icon-cloud-sun-rain:before {
  content: "";
}
.icon-cloud-upload:before {
  content: "";
}
.icon-cloud-upload-alt:before {
  content: "";
}
.icon-clouds:before {
  content: "";
}
.icon-clouds-moon:before {
  content: "";
}
.icon-clouds-sun:before {
  content: "";
}
.icon-cloudscale:before {
  content: "";
}
.icon-cloudsmith:before {
  content: "";
}
.icon-cloudversify:before {
  content: "";
}
.icon-club:before {
  content: "";
}
.icon-cocktail:before {
  content: "";
}
.icon-code:before {
  content: "";
}
.icon-code-branch:before {
  content: "";
}
.icon-code-commit:before {
  content: "";
}
.icon-code-merge:before {
  content: "";
}
.icon-codepen:before {
  content: "";
}
.icon-codiepie:before {
  content: "";
}
.icon-coffee:before {
  content: "";
}
.icon-coffee-togo:before {
  content: "";
}
.icon-coffin:before {
  content: "";
}
.icon-cog:before {
  content: "";
}
.icon-cogs:before {
  content: "";
}
.icon-coins:before {
  content: "";
}
.icon-columns:before {
  content: "";
}
.icon-comment:before {
  content: "";
}
.icon-comment-alt:before {
  content: "";
}
.icon-comment-alt-check:before {
  content: "";
}
.icon-comment-alt-dollar:before {
  content: "";
}
.icon-comment-alt-dots:before {
  content: "";
}
.icon-comment-alt-edit:before {
  content: "";
}
.icon-comment-alt-exclamation:before {
  content: "";
}
.icon-comment-alt-lines:before {
  content: "";
}
.icon-comment-alt-minus:before {
  content: "";
}
.icon-comment-alt-plus:before {
  content: "";
}
.icon-comment-alt-slash:before {
  content: "";
}
.icon-comment-alt-smile:before {
  content: "";
}
.icon-comment-alt-times:before {
  content: "";
}
.icon-comment-check:before {
  content: "";
}
.icon-comment-dollar:before {
  content: "";
}
.icon-comment-dots:before {
  content: "";
}
.icon-comment-edit:before {
  content: "";
}
.icon-comment-exclamation:before {
  content: "";
}
.icon-comment-lines:before {
  content: "";
}
.icon-comment-minus:before {
  content: "";
}
.icon-comment-plus:before {
  content: "";
}
.icon-comment-slash:before {
  content: "";
}
.icon-comment-smile:before {
  content: "";
}
.icon-comment-times:before {
  content: "";
}
.icon-comments:before {
  content: "";
}
.icon-comments-alt:before {
  content: "";
}
.icon-comments-alt-dollar:before {
  content: "";
}
.icon-comments-dollar:before {
  content: "";
}
.icon-compact-disc:before {
  content: "";
}
.icon-compass:before {
  content: "";
}
.icon-compass-slash:before {
  content: "";
}
.icon-compress:before {
  content: "";
}
.icon-compress-alt:before {
  content: "";
}
.icon-compress-arrows-alt:before {
  content: "";
}
.icon-compress-wide:before {
  content: "";
}
.icon-concierge-bell:before {
  content: "";
}
.icon-confluence:before {
  content: "";
}
.icon-connectdevelop:before {
  content: "";
}
.icon-container-storage:before {
  content: "";
}
.icon-contao:before {
  content: "";
}
.icon-conveyor-belt:before {
  content: "";
}
.icon-conveyor-belt-alt:before {
  content: "";
}
.icon-cookie:before {
  content: "";
}
.icon-cookie-bite:before {
  content: "";
}
.icon-copy:before {
  content: "";
}
.icon-copyright:before {
  content: "";
}
.icon-corn:before {
  content: "";
}
.icon-couch:before {
  content: "";
}
.icon-cow:before {
  content: "";
}
.icon-cpanel:before {
  content: "";
}
.icon-creative-commons:before {
  content: "";
}
.icon-creative-commons-by:before {
  content: "";
}
.icon-creative-commons-nc:before {
  content: "";
}
.icon-creative-commons-nc-eu:before {
  content: "";
}
.icon-creative-commons-nc-jp:before {
  content: "";
}
.icon-creative-commons-nd:before {
  content: "";
}
.icon-creative-commons-pd:before {
  content: "";
}
.icon-creative-commons-pd-alt:before {
  content: "";
}
.icon-creative-commons-remix:before {
  content: "";
}
.icon-creative-commons-sa:before {
  content: "";
}
.icon-creative-commons-sampling:before {
  content: "";
}
.icon-creative-commons-sampling-plus:before {
  content: "";
}
.icon-creative-commons-share:before {
  content: "";
}
.icon-creative-commons-zero:before {
  content: "";
}
.icon-credit-card:before {
  content: "";
}
.icon-credit-card-blank:before {
  content: "";
}
.icon-credit-card-front:before {
  content: "";
}
.icon-cricket:before {
  content: "";
}
.icon-critical-role:before {
  content: "";
}
.icon-crop:before {
  content: "";
}
.icon-crop-alt:before {
  content: "";
}
.icon-cross:before {
  content: "";
}
.icon-crosshairs:before {
  content: "";
}
.icon-crow:before {
  content: "";
}
.icon-crown:before {
  content: "";
}
.icon-css3:before {
  content: "";
}
.icon-css3-alt:before {
  content: "";
}
.icon-cube:before {
  content: "";
}
.icon-cubes:before {
  content: "";
}
.icon-curling:before {
  content: "";
}
.icon-cut:before {
  content: "";
}
.icon-cuttlefish:before {
  content: "";
}
.icon-d-and-d:before {
  content: "";
}
.icon-d-and-d-beyond:before {
  content: "";
}
.icon-dagger:before {
  content: "";
}
.icon-dashcube:before {
  content: "";
}
.icon-database:before {
  content: "";
}
.icon-deaf:before {
  content: "";
}
.icon-deer:before {
  content: "";
}
.icon-deer-rudolph:before {
  content: "";
}
.icon-delicious:before {
  content: "";
}
.icon-democrat:before {
  content: "";
}
.icon-deploydog:before {
  content: "";
}
.icon-deskpro:before {
  content: "";
}
.icon-desktop:before {
  content: "";
}
.icon-desktop-alt:before {
  content: "";
}
.icon-dev:before {
  content: "";
}
.icon-deviantart:before {
  content: "";
}
.icon-dewpoint:before {
  content: "";
}
.icon-dharmachakra:before {
  content: "";
}
.icon-dhl:before {
  content: "";
}
.icon-diagnoses:before {
  content: "";
}
.icon-diamond:before {
  content: "";
}
.icon-diaspora:before {
  content: "";
}
.icon-dice:before {
  content: "";
}
.icon-dice-d10:before {
  content: "";
}
.icon-dice-d12:before {
  content: "";
}
.icon-dice-d20:before {
  content: "";
}
.icon-dice-d4:before {
  content: "";
}
.icon-dice-d6:before {
  content: "";
}
.icon-dice-d8:before {
  content: "";
}
.icon-dice-five:before {
  content: "";
}
.icon-dice-four:before {
  content: "";
}
.icon-dice-one:before {
  content: "";
}
.icon-dice-six:before {
  content: "";
}
.icon-dice-three:before {
  content: "";
}
.icon-dice-two:before {
  content: "";
}
.icon-digg:before {
  content: "";
}
.icon-digital-ocean:before {
  content: "";
}
.icon-digital-tachograph:before {
  content: "";
}
.icon-diploma:before {
  content: "";
}
.icon-directions:before {
  content: "";
}
.icon-discord:before {
  content: "";
}
.icon-discourse:before {
  content: "";
}
.icon-divide:before {
  content: "";
}
.icon-dizzy:before {
  content: "";
}
.icon-dna:before {
  content: "";
}
.icon-do-not-enter:before {
  content: "";
}
.icon-dochub:before {
  content: "";
}
.icon-docker:before {
  content: "";
}
.icon-dog:before {
  content: "";
}
.icon-dog-leashed:before {
  content: "";
}
.icon-dollar-sign:before {
  content: "";
}
.icon-dolly:before {
  content: "";
}
.icon-dolly-empty:before {
  content: "";
}
.icon-dolly-flatbed:before {
  content: "";
}
.icon-dolly-flatbed-alt:before {
  content: "";
}
.icon-dolly-flatbed-empty:before {
  content: "";
}
.icon-donate:before {
  content: "";
}
.icon-door-closed:before {
  content: "";
}
.icon-door-open:before {
  content: "";
}
.icon-dot-circle:before {
  content: "";
}
.icon-dove:before {
  content: "";
}
.icon-download:before {
  content: "";
}
.icon-draft2digital:before {
  content: "";
}
.icon-drafting-compass:before {
  content: "";
}
.icon-dragon:before {
  content: "";
}
.icon-draw-circle:before {
  content: "";
}
.icon-draw-polygon:before {
  content: "";
}
.icon-draw-square:before {
  content: "";
}
.icon-dreidel:before {
  content: "";
}
.icon-dribbble:before {
  content: "";
}
.icon-dribbble-square:before {
  content: "";
}
.icon-dropbox:before {
  content: "";
}
.icon-drum:before {
  content: "";
}
.icon-drum-steelpan:before {
  content: "";
}
.icon-drumstick:before {
  content: "";
}
.icon-drumstick-bite:before {
  content: "";
}
.icon-drupal:before {
  content: "";
}
.icon-duck:before {
  content: "";
}
.icon-dumbbell:before {
  content: "";
}
.icon-dumpster:before {
  content: "";
}
.icon-dumpster-fire:before {
  content: "";
}
.icon-dungeon:before {
  content: "";
}
.icon-dyalog:before {
  content: "";
}
.icon-ear:before {
  content: "";
}
.icon-ear-muffs:before {
  content: "";
}
.icon-earlybirds:before {
  content: "";
}
.icon-ebay:before {
  content: "";
}
.icon-eclipse:before {
  content: "";
}
.icon-eclipse-alt:before {
  content: "";
}
.icon-edge:before {
  content: "";
}
.icon-edit:before {
  content: "";
}
.icon-eject:before {
  content: "";
}
.icon-elementor:before {
  content: "";
}
.icon-elephant:before {
  content: "";
}
.icon-ellipsis-h:before {
  content: "";
}
.icon-ellipsis-h-alt:before {
  content: "";
}
.icon-ellipsis-v:before {
  content: "";
}
.icon-ellipsis-v-alt:before {
  content: "";
}
.icon-ello:before {
  content: "";
}
.icon-ember:before {
  content: "";
}
.icon-empire:before {
  content: "";
}
.icon-empty-set:before {
  content: "";
}
.icon-engine-warning:before {
  content: "";
}
.icon-envelope:before {
  content: "";
}
.icon-envelope-open:before {
  content: "";
}
.icon-envelope-open-dollar:before {
  content: "";
}
.icon-envelope-open-text:before {
  content: "";
}
.icon-envelope-square:before {
  content: "";
}
.icon-envira:before {
  content: "";
}
.icon-equals:before {
  content: "";
}
.icon-eraser:before {
  content: "";
}
.icon-erlang:before {
  content: "";
}
.icon-ethereum:before {
  content: "";
}
.icon-ethernet:before {
  content: "";
}
.icon-etsy:before {
  content: "";
}
.icon-euro-sign:before {
  content: "";
}
.icon-exchange:before {
  content: "";
}
.icon-exchange-alt:before {
  content: "";
}
.icon-exclamation:before {
  content: "";
}
.icon-exclamation-circle:before {
  content: "";
}
.icon-exclamation-square:before {
  content: "";
}
.icon-exclamation-triangle:before {
  content: "";
}
.icon-expand:before {
  content: "";
}
.icon-expand-alt:before {
  content: "";
}
.icon-expand-arrows:before {
  content: "";
}
.icon-expand-arrows-alt:before {
  content: "";
}
.icon-expand-wide:before {
  content: "";
}
.icon-expeditedssl:before {
  content: "";
}
.icon-external-link:before {
  content: "";
}
.icon-external-link-alt:before {
  content: "";
}
.icon-external-link-square:before {
  content: "";
}
.icon-external-link-square-alt:before {
  content: "";
}
.icon-eye:before {
  content: "";
}
.icon-eye-dropper:before {
  content: "";
}
.icon-eye-evil:before {
  content: "";
}
.icon-eye-slash:before {
  content: "";
}
.icon-facebook:before {
  content: "";
}
.icon-facebook-f:before {
  content: "";
}
.icon-facebook-messenger:before {
  content: "";
}
.icon-facebook-square:before {
  content: "";
}
.icon-fantasy-flight-games:before {
  content: "";
}
.icon-fast-backward:before {
  content: "";
}
.icon-fast-forward:before {
  content: "";
}
.icon-fax:before {
  content: "";
}
.icon-feather:before {
  content: "";
}
.icon-feather-alt:before {
  content: "";
}
.icon-fedex:before {
  content: "";
}
.icon-fedora:before {
  content: "";
}
.icon-female:before {
  content: "";
}
.icon-field-hockey:before {
  content: "";
}
.icon-fighter-jet:before {
  content: "";
}
.icon-figma:before {
  content: "";
}
.icon-file:before {
  content: "";
}
.icon-file-alt:before {
  content: "";
}
.icon-file-archive:before {
  content: "";
}
.icon-file-audio:before {
  content: "";
}
.icon-file-certificate:before {
  content: "";
}
.icon-file-chart-line:before {
  content: "";
}
.icon-file-chart-pie:before {
  content: "";
}
.icon-file-check:before {
  content: "";
}
.icon-file-code:before {
  content: "";
}
.icon-file-contract:before {
  content: "";
}
.icon-file-csv:before {
  content: "";
}
.icon-file-download:before {
  content: "";
}
.icon-file-edit:before {
  content: "";
}
.icon-file-excel:before {
  content: "";
}
.icon-file-exclamation:before {
  content: "";
}
.icon-file-export:before {
  content: "";
}
.icon-file-image:before {
  content: "";
}
.icon-file-import:before {
  content: "";
}
.icon-file-invoice:before {
  content: "";
}
.icon-file-invoice-dollar:before {
  content: "";
}
.icon-file-medical:before {
  content: "";
}
.icon-file-medical-alt:before {
  content: "";
}
.icon-file-minus:before {
  content: "";
}
.icon-file-pdf:before {
  content: "";
}
.icon-file-plus:before {
  content: "";
}
.icon-file-powerpoint:before {
  content: "";
}
.icon-file-prescription:before {
  content: "";
}
.icon-file-signature:before {
  content: "";
}
.icon-file-spreadsheet:before {
  content: "";
}
.icon-file-times:before {
  content: "";
}
.icon-file-upload:before {
  content: "";
}
.icon-file-user:before {
  content: "";
}
.icon-file-video:before {
  content: "";
}
.icon-file-word:before {
  content: "";
}
.icon-fill:before {
  content: "";
}
.icon-fill-drip:before {
  content: "";
}
.icon-film:before {
  content: "";
}
.icon-film-alt:before {
  content: "";
}
.icon-filter:before {
  content: "";
}
.icon-fingerprint:before {
  content: "";
}
.icon-fire:before {
  content: "";
}
.icon-fire-alt:before {
  content: "";
}
.icon-fire-extinguisher:before {
  content: "";
}
.icon-fire-smoke:before {
  content: "";
}
.icon-firefox:before {
  content: "";
}
.icon-fireplace:before {
  content: "";
}
.icon-first-aid:before {
  content: "";
}
.icon-first-order:before {
  content: "";
}
.icon-first-order-alt:before {
  content: "";
}
.icon-firstdraft:before {
  content: "";
}
.icon-fish:before {
  content: "";
}
.icon-fist-raised:before {
  content: "";
}
.icon-flag:before {
  content: "";
}
.icon-flag-alt:before {
  content: "";
}
.icon-flag-checkered:before {
  content: "";
}
.icon-flag-usa:before {
  content: "";
}
.icon-flame:before {
  content: "";
}
.icon-flask:before {
  content: "";
}
.icon-flask-poison:before {
  content: "";
}
.icon-flask-potion:before {
  content: "";
}
.icon-flickr:before {
  content: "";
}
.icon-flipboard:before {
  content: "";
}
.icon-flushed:before {
  content: "";
}
.icon-fly:before {
  content: "";
}
.icon-fog:before {
  content: "";
}
.icon-folder:before {
  content: "";
}
.icon-folder-minus:before {
  content: "";
}
.icon-folder-open:before {
  content: "";
}
.icon-folder-plus:before {
  content: "";
}
.icon-folder-times:before {
  content: "";
}
.icon-folders:before {
  content: "";
}
.icon-font:before {
  content: "";
}
.icon-font-awesome:before {
  content: "";
}
.icon-font-awesome-alt:before {
  content: "";
}
.icon-font-awesome-flag:before {
  content: "";
}
.icon-font-awesome-logo-full:before {
  content: "";
}
.icon-fonticons:before {
  content: "";
}
.icon-fonticons-fi:before {
  content: "";
}
.icon-football-ball:before {
  content: "";
}
.icon-football-helmet:before {
  content: "";
}
.icon-forklift:before {
  content: "";
}
.icon-fort-awesome:before {
  content: "";
}
.icon-fort-awesome-alt:before {
  content: "";
}
.icon-forumbee:before {
  content: "";
}
.icon-forward:before {
  content: "";
}
.icon-foursquare:before {
  content: "";
}
.icon-fragile:before {
  content: "";
}
.icon-free-code-camp:before {
  content: "";
}
.icon-freebsd:before {
  content: "";
}
.icon-frog:before {
  content: "";
}
.icon-frosty-head:before {
  content: "";
}
.icon-frown:before {
  content: "";
}
.icon-frown-open:before {
  content: "";
}
.icon-fulcrum:before {
  content: "";
}
.icon-function:before {
  content: "";
}
.icon-funnel-dollar:before {
  content: "";
}
.icon-futbol:before {
  content: "";
}
.icon-galactic-republic:before {
  content: "";
}
.icon-galactic-senate:before {
  content: "";
}
.icon-gamepad:before {
  content: "";
}
.icon-gas-pump:before {
  content: "";
}
.icon-gas-pump-slash:before {
  content: "";
}
.icon-gavel:before {
  content: "";
}
.icon-gem:before {
  content: "";
}
.icon-genderless:before {
  content: "";
}
.icon-get-pocket:before {
  content: "";
}
.icon-gg:before {
  content: "";
}
.icon-gg-circle:before {
  content: "";
}
.icon-ghost:before {
  content: "";
}
.icon-gift:before {
  content: "";
}
.icon-gift-card:before {
  content: "";
}
.icon-gifts:before {
  content: "";
}
.icon-gingerbread-man:before {
  content: "";
}
.icon-git:before {
  content: "";
}
.icon-git-square:before {
  content: "";
}
.icon-github:before {
  content: "";
}
.icon-github-alt:before {
  content: "";
}
.icon-github-square:before {
  content: "";
}
.icon-gitkraken:before {
  content: "";
}
.icon-gitlab:before {
  content: "";
}
.icon-gitter:before {
  content: "";
}
.icon-glass-champagne:before {
  content: "";
}
.icon-glass-cheers:before {
  content: "";
}
.icon-glass-martini:before {
  content: "";
}
.icon-glass-martini-alt:before {
  content: "";
}
.icon-glass-whiskey:before {
  content: "";
}
.icon-glass-whiskey-rocks:before {
  content: "";
}
.icon-glasses:before {
  content: "";
}
.icon-glasses-alt:before {
  content: "";
}
.icon-glide:before {
  content: "";
}
.icon-glide-g:before {
  content: "";
}
.icon-globe:before {
  content: "";
}
.icon-globe-africa:before {
  content: "";
}
.icon-globe-americas:before {
  content: "";
}
.icon-globe-asia:before {
  content: "";
}
.icon-globe-europe:before {
  content: "";
}
.icon-globe-snow:before {
  content: "";
}
.icon-globe-stand:before {
  content: "";
}
.icon-gofore:before {
  content: "";
}
.icon-golf-ball:before {
  content: "";
}
.icon-golf-club:before {
  content: "";
}
.icon-goodreads:before {
  content: "";
}
.icon-goodreads-g:before {
  content: "";
}
.icon-google:before {
  content: "";
}
.icon-google-drive:before {
  content: "";
}
.icon-google-play:before {
  content: "";
}
.icon-google-plus:before {
  content: "";
}
.icon-google-plus-g:before {
  content: "";
}
.icon-google-plus-square:before {
  content: "";
}
.icon-google-wallet:before {
  content: "";
}
.icon-gopuram:before {
  content: "";
}
.icon-graduation-cap:before {
  content: "";
}
.icon-gratipay:before {
  content: "";
}
.icon-grav:before {
  content: "";
}
.icon-greater-than:before {
  content: "";
}
.icon-greater-than-equal:before {
  content: "";
}
.icon-grimace:before {
  content: "";
}
.icon-grin:before {
  content: "";
}
.icon-grin-alt:before {
  content: "";
}
.icon-grin-beam:before {
  content: "";
}
.icon-grin-beam-sweat:before {
  content: "";
}
.icon-grin-hearts:before {
  content: "";
}
.icon-grin-squint:before {
  content: "";
}
.icon-grin-squint-tears:before {
  content: "";
}
.icon-grin-stars:before {
  content: "";
}
.icon-grin-tears:before {
  content: "";
}
.icon-grin-tongue:before {
  content: "";
}
.icon-grin-tongue-squint:before {
  content: "";
}
.icon-grin-tongue-wink:before {
  content: "";
}
.icon-grin-wink:before {
  content: "";
}
.icon-grip-horizontal:before {
  content: "";
}
.icon-grip-lines:before {
  content: "";
}
.icon-grip-lines-vertical:before {
  content: "";
}
.icon-grip-vertical:before {
  content: "";
}
.icon-gripfire:before {
  content: "";
}
.icon-grunt:before {
  content: "";
}
.icon-guitar:before {
  content: "";
}
.icon-gulp:before {
  content: "";
}
.icon-h-square:before {
  content: "";
}
.icon-h1:before {
  content: "";
}
.icon-h2:before {
  content: "";
}
.icon-h3:before {
  content: "";
}
.icon-hacker-news:before {
  content: "";
}
.icon-hacker-news-square:before {
  content: "";
}
.icon-hackerrank:before {
  content: "";
}
.icon-hammer:before {
  content: "";
}
.icon-hammer-war:before {
  content: "";
}
.icon-hamsa:before {
  content: "";
}
.icon-hand-heart:before {
  content: "";
}
.icon-hand-holding:before {
  content: "";
}
.icon-hand-holding-box:before {
  content: "";
}
.icon-hand-holding-heart:before {
  content: "";
}
.icon-hand-holding-magic:before {
  content: "";
}
.icon-hand-holding-seedling:before {
  content: "";
}
.icon-hand-holding-usd:before {
  content: "";
}
.icon-hand-holding-water:before {
  content: "";
}
.icon-hand-lizard:before {
  content: "";
}
.icon-hand-paper:before {
  content: "";
}
.icon-hand-peace:before {
  content: "";
}
.icon-hand-point-down:before {
  content: "";
}
.icon-hand-point-left:before {
  content: "";
}
.icon-hand-point-right:before {
  content: "";
}
.icon-hand-point-up:before {
  content: "";
}
.icon-hand-pointer:before {
  content: "";
}
.icon-hand-receiving:before {
  content: "";
}
.icon-hand-rock:before {
  content: "";
}
.icon-hand-scissors:before {
  content: "";
}
.icon-hand-spock:before {
  content: "";
}
.icon-hands:before {
  content: "";
}
.icon-hands-heart:before {
  content: "";
}
.icon-hands-helping:before {
  content: "";
}
.icon-hands-usd:before {
  content: "";
}
.icon-handshake:before {
  content: "";
}
.icon-handshake-alt:before {
  content: "";
}
.icon-hanukiah:before {
  content: "";
}
.icon-hashtag:before {
  content: "";
}
.icon-hat-santa:before {
  content: "";
}
.icon-hat-winter:before {
  content: "";
}
.icon-hat-witch:before {
  content: "";
}
.icon-hat-wizard:before {
  content: "";
}
.icon-haykal:before {
  content: "";
}
.icon-hdd:before {
  content: "";
}
.icon-head-side:before {
  content: "";
}
.icon-head-vr:before {
  content: "";
}
.icon-heading:before {
  content: "";
}
.icon-headphones:before {
  content: "";
}
.icon-headphones-alt:before {
  content: "";
}
.icon-headset:before {
  content: "";
}
.icon-heart:before {
  content: "";
}
.icon-heart-broken:before {
  content: "";
}
.icon-heart-circle:before {
  content: "";
}
.icon-heart-rate:before {
  content: "";
}
.icon-heart-square:before {
  content: "";
}
.icon-heartbeat:before {
  content: "";
}
.icon-helicopter:before {
  content: "";
}
.icon-helmet-battle:before {
  content: "";
}
.icon-hexagon:before {
  content: "";
}
.icon-highlighter:before {
  content: "";
}
.icon-hiking:before {
  content: "";
}
.icon-hippo:before {
  content: "";
}
.icon-hips:before {
  content: "";
}
.icon-hire-a-helper:before {
  content: "";
}
.icon-history:before {
  content: "";
}
.icon-hockey-mask:before {
  content: "";
}
.icon-hockey-puck:before {
  content: "";
}
.icon-hockey-sticks:before {
  content: "";
}
.icon-holly-berry:before {
  content: "";
}
.icon-home:before {
  content: "";
}
.icon-home-heart:before {
  content: "";
}
.icon-hood-cloak:before {
  content: "";
}
.icon-hooli:before {
  content: "";
}
.icon-hornbill:before {
  content: "";
}
.icon-horse:before {
  content: "";
}
.icon-horse-head:before {
  content: "";
}
.icon-hospital:before {
  content: "";
}
.icon-hospital-alt:before {
  content: "";
}
.icon-hospital-symbol:before {
  content: "";
}
.icon-hot-tub:before {
  content: "";
}
.icon-hotel:before {
  content: "";
}
.icon-hotjar:before {
  content: "";
}
.icon-hourglass:before {
  content: "";
}
.icon-hourglass-end:before {
  content: "";
}
.icon-hourglass-half:before {
  content: "";
}
.icon-hourglass-start:before {
  content: "";
}
.icon-house-damage:before {
  content: "";
}
.icon-house-flood:before {
  content: "";
}
.icon-houzz:before {
  content: "";
}
.icon-hryvnia:before {
  content: "";
}
.icon-html5:before {
  content: "";
}
.icon-hubspot:before {
  content: "";
}
.icon-humidity:before {
  content: "";
}
.icon-hurricane:before {
  content: "";
}
.icon-i-cursor:before {
  content: "";
}
.icon-ice-skate:before {
  content: "";
}
.icon-icicles:before {
  content: "";
}
.icon-id-badge:before {
  content: "";
}
.icon-id-card:before {
  content: "";
}
.icon-id-card-alt:before {
  content: "";
}
.icon-igloo:before {
  content: "";
}
.icon-image:before {
  content: "";
}
.icon-images:before {
  content: "";
}
.icon-imdb:before {
  content: "";
}
.icon-inbox:before {
  content: "";
}
.icon-inbox-in:before {
  content: "";
}
.icon-inbox-out:before {
  content: "";
}
.icon-indent:before {
  content: "";
}
.icon-industry:before {
  content: "";
}
.icon-industry-alt:before {
  content: "";
}
.icon-infinity:before {
  content: "";
}
.icon-info:before {
  content: "";
}
.icon-info-circle:before {
  content: "";
}
.icon-info-square:before {
  content: "";
}
.icon-inhaler:before {
  content: "";
}
.icon-instagram:before {
  content: "";
}
.icon-integral:before {
  content: "";
}
.icon-intercom:before {
  content: "";
}
.icon-internet-explorer:before {
  content: "";
}
.icon-intersection:before {
  content: "";
}
.icon-inventory:before {
  content: "";
}
.icon-invision:before {
  content: "";
}
.icon-ioxhost:before {
  content: "";
}
.icon-italic:before {
  content: "";
}
.icon-itunes:before {
  content: "";
}
.icon-itunes-note:before {
  content: "";
}
.icon-jack-o-lantern:before {
  content: "";
}
.icon-java:before {
  content: "";
}
.icon-jedi:before {
  content: "";
}
.icon-jedi-order:before {
  content: "";
}
.icon-jenkins:before {
  content: "";
}
.icon-jira:before {
  content: "";
}
.icon-joget:before {
  content: "";
}
.icon-joint:before {
  content: "";
}
.icon-joomla:before {
  content: "";
}
.icon-journal-whills:before {
  content: "";
}
.icon-js:before {
  content: "";
}
.icon-js-square:before {
  content: "";
}
.icon-jsfiddle:before {
  content: "";
}
.icon-kaaba:before {
  content: "";
}
.icon-kaggle:before {
  content: "";
}
.icon-key:before {
  content: "";
}
.icon-key-skeleton:before {
  content: "";
}
.icon-keybase:before {
  content: "";
}
.icon-keyboard:before {
  content: "";
}
.icon-keycdn:before {
  content: "";
}
.icon-keynote:before {
  content: "";
}
.icon-khanda:before {
  content: "";
}
.icon-kickstarter:before {
  content: "";
}
.icon-kickstarter-k:before {
  content: "";
}
.icon-kidneys:before {
  content: "";
}
.icon-kiss:before {
  content: "";
}
.icon-kiss-beam:before {
  content: "";
}
.icon-kiss-wink-heart:before {
  content: "";
}
.icon-kite:before {
  content: "";
}
.icon-kiwi-bird:before {
  content: "";
}
.icon-knife-kitchen:before {
  content: "";
}
.icon-korvue:before {
  content: "";
}
.icon-lambda:before {
  content: "";
}
.icon-lamp:before {
  content: "";
}
.icon-landmark:before {
  content: "";
}
.icon-landmark-alt:before {
  content: "";
}
.icon-language:before {
  content: "";
}
.icon-laptop:before {
  content: "";
}
.icon-laptop-code:before {
  content: "";
}
.icon-laravel:before {
  content: "";
}
.icon-lastfm:before {
  content: "";
}
.icon-lastfm-square:before {
  content: "";
}
.icon-laugh:before {
  content: "";
}
.icon-laugh-beam:before {
  content: "";
}
.icon-laugh-squint:before {
  content: "";
}
.icon-laugh-wink:before {
  content: "";
}
.icon-layer-group:before {
  content: "";
}
.icon-layer-minus:before {
  content: "";
}
.icon-layer-plus:before {
  content: "";
}
.icon-leaf:before {
  content: "";
}
.icon-leaf-heart:before {
  content: "";
}
.icon-leaf-maple:before {
  content: "";
}
.icon-leaf-oak:before {
  content: "";
}
.icon-leanpub:before {
  content: "";
}
.icon-lemon:before {
  content: "";
}
.icon-less:before {
  content: "";
}
.icon-less-than:before {
  content: "";
}
.icon-less-than-equal:before {
  content: "";
}
.icon-level-down:before {
  content: "";
}
.icon-level-down-alt:before {
  content: "";
}
.icon-level-up:before {
  content: "";
}
.icon-level-up-alt:before {
  content: "";
}
.icon-life-ring:before {
  content: "";
}
.icon-lightbulb:before {
  content: "";
}
.icon-lightbulb-dollar:before {
  content: "";
}
.icon-lightbulb-exclamation:before {
  content: "";
}
.icon-lightbulb-on:before {
  content: "";
}
.icon-lightbulb-slash:before {
  content: "";
}
.icon-lights-holiday:before {
  content: "";
}
.icon-line:before {
  content: "";
}
.icon-link:before {
  content: "";
}
.icon-linkedin:before {
  content: "";
}
.icon-linkedin-in:before {
  content: "";
}
.icon-linode:before {
  content: "";
}
.icon-linux:before {
  content: "";
}
.icon-lips:before {
  content: "";
}
.icon-lira-sign:before {
  content: "";
}
.icon-list:before {
  content: "";
}
.icon-list-alt:before {
  content: "";
}
.icon-list-ol:before {
  content: "";
}
.icon-list-ul:before {
  content: "";
}
.icon-location:before {
  content: "";
}
.icon-location-arrow:before {
  content: "";
}
.icon-location-circle:before {
  content: "";
}
.icon-location-slash:before {
  content: "";
}
.icon-lock:before {
  content: "";
}
.icon-lock-alt:before {
  content: "";
}
.icon-lock-open:before {
  content: "";
}
.icon-lock-open-alt:before {
  content: "";
}
.icon-long-arrow-alt-down:before {
  content: "";
}
.icon-long-arrow-alt-left:before {
  content: "";
}
.icon-long-arrow-alt-right:before {
  content: "";
}
.icon-long-arrow-alt-up:before {
  content: "";
}
.icon-long-arrow-down:before {
  content: "";
}
.icon-long-arrow-left:before {
  content: "";
}
.icon-long-arrow-right:before {
  content: "";
}
.icon-long-arrow-up:before {
  content: "";
}
.icon-loveseat:before {
  content: "";
}
.icon-low-vision:before {
  content: "";
}
.icon-luchador:before {
  content: "";
}
.icon-luggage-cart:before {
  content: "";
}
.icon-lungs:before {
  content: "";
}
.icon-lyft:before {
  content: "";
}
.icon-mace:before {
  content: "";
}
.icon-magento:before {
  content: "";
}
.icon-magic:before {
  content: "";
}
.icon-magnet:before {
  content: "";
}
.icon-mail-bulk:before {
  content: "";
}
.icon-mailchimp:before {
  content: "";
}
.icon-male:before {
  content: "";
}
.icon-mandalorian:before {
  content: "";
}
.icon-mandolin:before {
  content: "";
}
.icon-map:before {
  content: "";
}
.icon-map-marked:before {
  content: "";
}
.icon-map-marked-alt:before {
  content: "";
}
.icon-map-marker:before {
  content: "";
}
.icon-map-marker-alt:before {
  content: "";
}
.icon-map-marker-alt-slash:before {
  content: "";
}
.icon-map-marker-check:before {
  content: "";
}
.icon-map-marker-edit:before {
  content: "";
}
.icon-map-marker-exclamation:before {
  content: "";
}
.icon-map-marker-minus:before {
  content: "";
}
.icon-map-marker-plus:before {
  content: "";
}
.icon-map-marker-question:before {
  content: "";
}
.icon-map-marker-slash:before {
  content: "";
}
.icon-map-marker-smile:before {
  content: "";
}
.icon-map-marker-times:before {
  content: "";
}
.icon-map-pin:before {
  content: "";
}
.icon-map-signs:before {
  content: "";
}
.icon-markdown:before {
  content: "";
}
.icon-marker:before {
  content: "";
}
.icon-mars:before {
  content: "";
}
.icon-mars-double:before {
  content: "";
}
.icon-mars-stroke:before {
  content: "";
}
.icon-mars-stroke-h:before {
  content: "";
}
.icon-mars-stroke-v:before {
  content: "";
}
.icon-mask:before {
  content: "";
}
.icon-mastodon:before {
  content: "";
}
.icon-maxcdn:before {
  content: "";
}
.icon-medal:before {
  content: "";
}
.icon-medapps:before {
  content: "";
}
.icon-medium:before {
  content: "";
}
.icon-medium-m:before {
  content: "";
}
.icon-medkit:before {
  content: "";
}
.icon-medrt:before {
  content: "";
}
.icon-meetup:before {
  content: "";
}
.icon-megaphone:before {
  content: "";
}
.icon-megaport:before {
  content: "";
}
.icon-meh:before {
  content: "";
}
.icon-meh-blank:before {
  content: "";
}
.icon-meh-rolling-eyes:before {
  content: "";
}
.icon-memory:before {
  content: "";
}
.icon-mendeley:before {
  content: "";
}
.icon-menorah:before {
  content: "";
}
.icon-mercury:before {
  content: "";
}
.icon-meteor:before {
  content: "";
}
.icon-microchip:before {
  content: "";
}
.icon-microphone:before {
  content: "";
}
.icon-microphone-alt:before {
  content: "";
}
.icon-microphone-alt-slash:before {
  content: "";
}
.icon-microphone-slash:before {
  content: "";
}
.icon-microscope:before {
  content: "";
}
.icon-microsoft:before {
  content: "";
}
.icon-mind-share:before {
  content: "";
}
.icon-minus:before {
  content: "";
}
.icon-minus-circle:before {
  content: "";
}
.icon-minus-hexagon:before {
  content: "";
}
.icon-minus-octagon:before {
  content: "";
}
.icon-minus-square:before {
  content: "";
}
.icon-mistletoe:before {
  content: "";
}
.icon-mitten:before {
  content: "";
}
.icon-mix:before {
  content: "";
}
.icon-mixcloud:before {
  content: "";
}
.icon-mizuni:before {
  content: "";
}
.icon-mobile:before {
  content: "";
}
.icon-mobile-alt:before {
  content: "";
}
.icon-mobile-android:before {
  content: "";
}
.icon-mobile-android-alt:before {
  content: "";
}
.icon-modx:before {
  content: "";
}
.icon-monero:before {
  content: "";
}
.icon-money-bill:before {
  content: "";
}
.icon-money-bill-alt:before {
  content: "";
}
.icon-money-bill-wave:before {
  content: "";
}
.icon-money-bill-wave-alt:before {
  content: "";
}
.icon-money-check:before {
  content: "";
}
.icon-money-check-alt:before {
  content: "";
}
.icon-monitor-heart-rate:before {
  content: "";
}
.icon-monkey:before {
  content: "";
}
.icon-monument:before {
  content: "";
}
.icon-moon:before {
  content: "";
}
.icon-moon-cloud:before {
  content: "";
}
.icon-moon-stars:before {
  content: "";
}
.icon-mortar-pestle:before {
  content: "";
}
.icon-mosque:before {
  content: "";
}
.icon-motorcycle:before {
  content: "";
}
.icon-mountain:before {
  content: "";
}
.icon-mountains:before {
  content: "";
}
.icon-mouse-pointer:before {
  content: "";
}
.icon-mug-hot:before {
  content: "";
}
.icon-mug-marshmallows:before {
  content: "";
}
.icon-music:before {
  content: "";
}
.icon-napster:before {
  content: "";
}
.icon-narwhal:before {
  content: "";
}
.icon-neos:before {
  content: "";
}
.icon-network-wired:before {
  content: "";
}
.icon-neuter:before {
  content: "";
}
.icon-newspaper:before {
  content: "";
}
.icon-nimblr:before {
  content: "";
}
.icon-nintendo-switch:before {
  content: "";
}
.icon-node:before {
  content: "";
}
.icon-node-js:before {
  content: "";
}
.icon-not-equal:before {
  content: "";
}
.icon-notes-medical:before {
  content: "";
}
.icon-npm:before {
  content: "";
}
.icon-ns8:before {
  content: "";
}
.icon-nutritionix:before {
  content: "";
}
.icon-object-group:before {
  content: "";
}
.icon-object-ungroup:before {
  content: "";
}
.icon-octagon:before {
  content: "";
}
.icon-odnoklassniki:before {
  content: "";
}
.icon-odnoklassniki-square:before {
  content: "";
}
.icon-oil-can:before {
  content: "";
}
.icon-oil-temp:before {
  content: "";
}
.icon-old-republic:before {
  content: "";
}
.icon-om:before {
  content: "";
}
.icon-omega:before {
  content: "";
}
.icon-opencart:before {
  content: "";
}
.icon-openid:before {
  content: "";
}
.icon-opera:before {
  content: "";
}
.icon-optin-monster:before {
  content: "";
}
.icon-ornament:before {
  content: "";
}
.icon-osi:before {
  content: "";
}
.icon-otter:before {
  content: "";
}
.icon-outdent:before {
  content: "";
}
.icon-page4:before {
  content: "";
}
.icon-pagelines:before {
  content: "";
}
.icon-paint-brush:before {
  content: "";
}
.icon-paint-brush-alt:before {
  content: "";
}
.icon-paint-roller:before {
  content: "";
}
.icon-palette:before {
  content: "";
}
.icon-palfed:before {
  content: "";
}
.icon-pallet:before {
  content: "";
}
.icon-pallet-alt:before {
  content: "";
}
.icon-paper-plane:before {
  content: "";
}
.icon-paperclip:before {
  content: "";
}
.icon-parachute-box:before {
  content: "";
}
.icon-paragraph:before {
  content: "";
}
.icon-parking:before {
  content: "";
}
.icon-parking-circle:before {
  content: "";
}
.icon-parking-circle-slash:before {
  content: "";
}
.icon-parking-slash:before {
  content: "";
}
.icon-passport:before {
  content: "";
}
.icon-pastafarianism:before {
  content: "";
}
.icon-paste:before {
  content: "";
}
.icon-patreon:before {
  content: "";
}
.icon-pause:before {
  content: "";
}
.icon-pause-circle:before {
  content: "";
}
.icon-paw:before {
  content: "";
}
.icon-paw-alt:before {
  content: "";
}
.icon-paw-claws:before {
  content: "";
}
.icon-paypal:before {
  content: "";
}
.icon-peace:before {
  content: "";
}
.icon-pegasus:before {
  content: "";
}
.icon-pen:before {
  content: "";
}
.icon-pen-alt:before {
  content: "";
}
.icon-pen-fancy:before {
  content: "";
}
.icon-pen-nib:before {
  content: "";
}
.icon-pen-square:before {
  content: "";
}
.icon-pencil:before {
  content: "";
}
.icon-pencil-alt:before {
  content: "";
}
.icon-pencil-paintbrush:before {
  content: "";
}
.icon-pencil-ruler:before {
  content: "";
}
.icon-pennant:before {
  content: "";
}
.icon-penny-arcade:before {
  content: "";
}
.icon-people-carry:before {
  content: "";
}
.icon-percent:before {
  content: "";
}
.icon-percentage:before {
  content: "";
}
.icon-periscope:before {
  content: "";
}
.icon-person-booth:before {
  content: "";
}
.icon-person-carry:before {
  content: "";
}
.icon-person-dolly:before {
  content: "";
}
.icon-person-dolly-empty:before {
  content: "";
}
.icon-person-sign:before {
  content: "";
}
.icon-phabricator:before {
  content: "";
}
.icon-phoenix-framework:before {
  content: "";
}
.icon-phoenix-squadron:before {
  content: "";
}
.icon-phone:before {
  content: "";
}
.icon-phone-office:before {
  content: "";
}
.icon-phone-plus:before {
  content: "";
}
.icon-phone-slash:before {
  content: "";
}
.icon-phone-square:before {
  content: "";
}
.icon-phone-volume:before {
  content: "";
}
.icon-php:before {
  content: "";
}
.icon-pi:before {
  content: "";
}
.icon-pie:before {
  content: "";
}
.icon-pied-piper:before {
  content: "";
}
.icon-pied-piper-alt:before {
  content: "";
}
.icon-pied-piper-hat:before {
  content: "";
}
.icon-pied-piper-pp:before {
  content: "";
}
.icon-pig:before {
  content: "";
}
.icon-piggy-bank:before {
  content: "";
}
.icon-pills:before {
  content: "";
}
.icon-pinterest:before {
  content: "";
}
.icon-pinterest-p:before {
  content: "";
}
.icon-pinterest-square:before {
  content: "";
}
.icon-place-of-worship:before {
  content: "";
}
.icon-plane:before {
  content: "";
}
.icon-plane-alt:before {
  content: "";
}
.icon-plane-arrival:before {
  content: "";
}
.icon-plane-departure:before {
  content: "";
}
.icon-play:before {
  content: "";
}
.icon-play-circle:before {
  content: "";
}
.icon-playstation:before {
  content: "";
}
.icon-plug:before {
  content: "";
}
.icon-plus:before {
  content: "";
}
.icon-plus-circle:before {
  content: "";
}
.icon-plus-hexagon:before {
  content: "";
}
.icon-plus-octagon:before {
  content: "";
}
.icon-plus-square:before {
  content: "";
}
.icon-podcast:before {
  content: "";
}
.icon-podium:before {
  content: "";
}
.icon-podium-star:before {
  content: "";
}
.icon-poll:before {
  content: "";
}
.icon-poll-h:before {
  content: "";
}
.icon-poll-people:before {
  content: "";
}
.icon-poo:before {
  content: "";
}
.icon-poo-storm:before {
  content: "";
}
.icon-poop:before {
  content: "";
}
.icon-portrait:before {
  content: "";
}
.icon-pound-sign:before {
  content: "";
}
.icon-power-off:before {
  content: "";
}
.icon-pray:before {
  content: "";
}
.icon-praying-hands:before {
  content: "";
}
.icon-prescription:before {
  content: "";
}
.icon-prescription-bottle:before {
  content: "";
}
.icon-prescription-bottle-alt:before {
  content: "";
}
.icon-presentation:before {
  content: "";
}
.icon-print:before {
  content: "";
}
.icon-print-slash:before {
  content: "";
}
.icon-procedures:before {
  content: "";
}
.icon-product-hunt:before {
  content: "";
}
.icon-project-diagram:before {
  content: "";
}
.icon-pumpkin:before {
  content: "";
}
.icon-pushed:before {
  content: "";
}
.icon-puzzle-piece:before {
  content: "";
}
.icon-python:before {
  content: "";
}
.icon-qq:before {
  content: "";
}
.icon-qrcode:before {
  content: "";
}
.icon-question:before {
  content: "";
}
.icon-question-circle:before {
  content: "";
}
.icon-question-square:before {
  content: "";
}
.icon-quidditch:before {
  content: "";
}
.icon-quinscape:before {
  content: "";
}
.icon-quora:before {
  content: "";
}
.icon-quote-left:before {
  content: "";
}
.icon-quote-right:before {
  content: "";
}
.icon-quran:before {
  content: "";
}
.icon-r-project:before {
  content: "";
}
.icon-rabbit:before {
  content: "";
}
.icon-rabbit-fast:before {
  content: "";
}
.icon-racquet:before {
  content: "";
}
.icon-radiation:before {
  content: "";
}
.icon-radiation-alt:before {
  content: "";
}
.icon-rainbow:before {
  content: "";
}
.icon-raindrops:before {
  content: "";
}
.icon-ram:before {
  content: "";
}
.icon-ramp-loading:before {
  content: "";
}
.icon-random:before {
  content: "";
}
.icon-raspberry-pi:before {
  content: "";
}
.icon-ravelry:before {
  content: "";
}
.icon-react:before {
  content: "";
}
.icon-reacteurope:before {
  content: "";
}
.icon-readme:before {
  content: "";
}
.icon-rebel:before {
  content: "";
}
.icon-receipt:before {
  content: "";
}
.icon-rectangle-landscape:before {
  content: "";
}
.icon-rectangle-portrait:before {
  content: "";
}
.icon-rectangle-wide:before {
  content: "";
}
.icon-recycle:before {
  content: "";
}
.icon-red-river:before {
  content: "";
}
.icon-reddit:before {
  content: "";
}
.icon-reddit-alien:before {
  content: "";
}
.icon-reddit-square:before {
  content: "";
}
.icon-redhat:before {
  content: "";
}
.icon-redo:before {
  content: "";
}
.icon-redo-alt:before {
  content: "";
}
.icon-registered:before {
  content: "";
}
.icon-renren:before {
  content: "";
}
.icon-repeat:before {
  content: "";
}
.icon-repeat-1:before {
  content: "";
}
.icon-repeat-1-alt:before {
  content: "";
}
.icon-repeat-alt:before {
  content: "";
}
.icon-reply:before {
  content: "";
}
.icon-reply-all:before {
  content: "";
}
.icon-replyd:before {
  content: "";
}
.icon-republican:before {
  content: "";
}
.icon-researchgate:before {
  content: "";
}
.icon-resolving:before {
  content: "";
}
.icon-restroom:before {
  content: "";
}
.icon-retweet:before {
  content: "";
}
.icon-retweet-alt:before {
  content: "";
}
.icon-rev:before {
  content: "";
}
.icon-ribbon:before {
  content: "";
}
.icon-ring:before {
  content: "";
}
.icon-road:before {
  content: "";
}
.icon-robot:before {
  content: "";
}
.icon-rocket:before {
  content: "";
}
.icon-rocketchat:before {
  content: "";
}
.icon-rockrms:before {
  content: "";
}
.icon-route:before {
  content: "";
}
.icon-route-highway:before {
  content: "";
}
.icon-route-interstate:before {
  content: "";
}
.icon-rss:before {
  content: "";
}
.icon-rss-square:before {
  content: "";
}
.icon-ruble-sign:before {
  content: "";
}
.icon-ruler:before {
  content: "";
}
.icon-ruler-combined:before {
  content: "";
}
.icon-ruler-horizontal:before {
  content: "";
}
.icon-ruler-triangle:before {
  content: "";
}
.icon-ruler-vertical:before {
  content: "";
}
.icon-running:before {
  content: "";
}
.icon-rupee-sign:before {
  content: "";
}
.icon-rv:before {
  content: "";
}
.icon-sad-cry:before {
  content: "";
}
.icon-sad-tear:before {
  content: "";
}
.icon-safari:before {
  content: "";
}
.icon-sass:before {
  content: "";
}
.icon-satellite:before {
  content: "";
}
.icon-satellite-dish:before {
  content: "";
}
.icon-save:before {
  content: "";
}
.icon-scalpel:before {
  content: "";
}
.icon-scalpel-path:before {
  content: "";
}
.icon-scanner:before {
  content: "";
}
.icon-scanner-keyboard:before {
  content: "";
}
.icon-scanner-touchscreen:before {
  content: "";
}
.icon-scarecrow:before {
  content: "";
}
.icon-scarf:before {
  content: "";
}
.icon-schlix:before {
  content: "";
}
.icon-school:before {
  content: "";
}
.icon-screwdriver:before {
  content: "";
}
.icon-scribd:before {
  content: "";
}
.icon-scroll:before {
  content: "";
}
.icon-scroll-old:before {
  content: "";
}
.icon-scrubber:before {
  content: "";
}
.icon-scythe:before {
  content: "";
}
.icon-sd-card:before {
  content: "";
}
.icon-search:before {
  content: "";
}
.icon-search-dollar:before {
  content: "";
}
.icon-search-location:before {
  content: "";
}
.icon-search-minus:before {
  content: "";
}
.icon-search-plus:before {
  content: "";
}
.icon-searchengin:before {
  content: "";
}
.icon-seedling:before {
  content: "";
}
.icon-sellcast:before {
  content: "";
}
.icon-sellsy:before {
  content: "";
}
.icon-server:before {
  content: "";
}
.icon-servicestack:before {
  content: "";
}
.icon-shapes:before {
  content: "";
}
.icon-share:before {
  content: "";
}
.icon-share-all:before {
  content: "";
}
.icon-share-alt:before {
  content: "";
}
.icon-share-alt-square:before {
  content: "";
}
.icon-share-square:before {
  content: "";
}
.icon-sheep:before {
  content: "";
}
.icon-shekel-sign:before {
  content: "";
}
.icon-shield:before {
  content: "";
}
.icon-shield-alt:before {
  content: "";
}
.icon-shield-check:before {
  content: "";
}
.icon-shield-cross:before {
  content: "";
}
.icon-ship:before {
  content: "";
}
.icon-shipping-fast:before {
  content: "";
}
.icon-shipping-timed:before {
  content: "";
}
.icon-shirtsinbulk:before {
  content: "";
}
.icon-shoe-prints:before {
  content: "";
}
.icon-shopping-bag:before {
  content: "";
}
.icon-shopping-basket:before {
  content: "";
}
.icon-shopping-cart:before {
  content: "";
}
.icon-shopware:before {
  content: "";
}
.icon-shovel:before {
  content: "";
}
.icon-shovel-snow:before {
  content: "";
}
.icon-shower:before {
  content: "";
}
.icon-shredder:before {
  content: "";
}
.icon-shuttle-van:before {
  content: "";
}
.icon-shuttlecock:before {
  content: "";
}
.icon-sigma:before {
  content: "";
}
.icon-sign:before {
  content: "";
}
.icon-sign-in:before {
  content: "";
}
.icon-sign-in-alt:before {
  content: "";
}
.icon-sign-language:before {
  content: "";
}
.icon-sign-out:before {
  content: "";
}
.icon-sign-out-alt:before {
  content: "";
}
.icon-signal:before {
  content: "";
}
.icon-signal-1:before {
  content: "";
}
.icon-signal-2:before {
  content: "";
}
.icon-signal-3:before {
  content: "";
}
.icon-signal-4:before {
  content: "";
}
.icon-signal-alt:before {
  content: "";
}
.icon-signal-alt-1:before {
  content: "";
}
.icon-signal-alt-2:before {
  content: "";
}
.icon-signal-alt-3:before {
  content: "";
}
.icon-signal-alt-slash:before {
  content: "";
}
.icon-signal-slash:before {
  content: "";
}
.icon-signature:before {
  content: "";
}
.icon-sim-card:before {
  content: "";
}
.icon-simplybuilt:before {
  content: "";
}
.icon-sistrix:before {
  content: "";
}
.icon-sitemap:before {
  content: "";
}
.icon-sith:before {
  content: "";
}
.icon-skating:before {
  content: "";
}
.icon-skeleton:before {
  content: "";
}
.icon-sketch:before {
  content: "";
}
.icon-ski-jump:before {
  content: "";
}
.icon-ski-lift:before {
  content: "";
}
.icon-skiing:before {
  content: "";
}
.icon-skiing-nordic:before {
  content: "";
}
.icon-skull:before {
  content: "";
}
.icon-skull-crossbones:before {
  content: "";
}
.icon-skyatlas:before {
  content: "";
}
.icon-skype:before {
  content: "";
}
.icon-slack:before {
  content: "";
}
.icon-slack-hash:before {
  content: "";
}
.icon-slash:before {
  content: "";
}
.icon-sledding:before {
  content: "";
}
.icon-sleigh:before {
  content: "";
}
.icon-sliders-h:before {
  content: "";
}
.icon-sliders-h-square:before {
  content: "";
}
.icon-sliders-v:before {
  content: "";
}
.icon-sliders-v-square:before {
  content: "";
}
.icon-slideshare:before {
  content: "";
}
.icon-smile:before {
  content: "";
}
.icon-smile-beam:before {
  content: "";
}
.icon-smile-plus:before {
  content: "";
}
.icon-smile-wink:before {
  content: "";
}
.icon-smog:before {
  content: "";
}
.icon-smoke:before {
  content: "";
}
.icon-smoking:before {
  content: "";
}
.icon-smoking-ban:before {
  content: "";
}
.icon-sms:before {
  content: "";
}
.icon-snake:before {
  content: "";
}
.icon-snapchat:before {
  content: "";
}
.icon-snapchat-ghost:before {
  content: "";
}
.icon-snapchat-square:before {
  content: "";
}
.icon-snow-blowing:before {
  content: "";
}
.icon-snowboarding:before {
  content: "";
}
.icon-snowflake:before {
  content: "";
}
.icon-snowflakes:before {
  content: "";
}
.icon-snowman:before {
  content: "";
}
.icon-snowmobile:before {
  content: "";
}
.icon-snowplow:before {
  content: "";
}
.icon-socks:before {
  content: "";
}
.icon-solar-panel:before {
  content: "";
}
.icon-sort:before {
  content: "";
}
.icon-sort-alpha-down:before {
  content: "";
}
.icon-sort-alpha-up:before {
  content: "";
}
.icon-sort-amount-down:before {
  content: "";
}
.icon-sort-amount-up:before {
  content: "";
}
.icon-sort-down:before {
  content: "";
}
.icon-sort-numeric-down:before {
  content: "";
}
.icon-sort-numeric-up:before {
  content: "";
}
.icon-sort-up:before {
  content: "";
}
.icon-soundcloud:before {
  content: "";
}
.icon-sourcetree:before {
  content: "";
}
.icon-spa:before {
  content: "";
}
.icon-space-shuttle:before {
  content: "";
}
.icon-spade:before {
  content: "";
}
.icon-speakap:before {
  content: "";
}
.icon-spider:before {
  content: "";
}
.icon-spider-black-widow:before {
  content: "";
}
.icon-spider-web:before {
  content: "";
}
.icon-spinner:before {
  content: "";
}
.icon-spinner-third:before {
  content: "";
}
.icon-splotch:before {
  content: "";
}
.icon-spotify:before {
  content: "";
}
.icon-spray-can:before {
  content: "";
}
.icon-square:before {
  content: "";
}
.icon-square-full:before {
  content: "";
}
.icon-square-root:before {
  content: "";
}
.icon-square-root-alt:before {
  content: "";
}
.icon-squarespace:before {
  content: "";
}
.icon-squirrel:before {
  content: "";
}
.icon-stack-exchange:before {
  content: "";
}
.icon-stack-overflow:before {
  content: "";
}
.icon-staff:before {
  content: "";
}
.icon-stamp:before {
  content: "";
}
.icon-star:before {
  content: "";
}
.icon-star-and-crescent:before {
  content: "";
}
.icon-star-christmas:before {
  content: "";
}
.icon-star-exclamation:before {
  content: "";
}
.icon-star-half:before {
  content: "";
}
.icon-star-half-alt:before {
  content: "";
}
.icon-star-of-david:before {
  content: "";
}
.icon-star-of-life:before {
  content: "";
}
.icon-stars:before {
  content: "";
}
.icon-staylinked:before {
  content: "";
}
.icon-steam:before {
  content: "";
}
.icon-steam-square:before {
  content: "";
}
.icon-steam-symbol:before {
  content: "";
}
.icon-steering-wheel:before {
  content: "";
}
.icon-step-backward:before {
  content: "";
}
.icon-step-forward:before {
  content: "";
}
.icon-stethoscope:before {
  content: "";
}
.icon-sticker-mule:before {
  content: "";
}
.icon-sticky-note:before {
  content: "";
}
.icon-stocking:before {
  content: "";
}
.icon-stomach:before {
  content: "";
}
.icon-stop:before {
  content: "";
}
.icon-stop-circle:before {
  content: "";
}
.icon-stopwatch:before {
  content: "";
}
.icon-store:before {
  content: "";
}
.icon-store-alt:before {
  content: "";
}
.icon-strava:before {
  content: "";
}
.icon-stream:before {
  content: "";
}
.icon-street-view:before {
  content: "";
}
.icon-strikethrough:before {
  content: "";
}
.icon-stripe:before {
  content: "";
}
.icon-stripe-s:before {
  content: "";
}
.icon-stroopwafel:before {
  content: "";
}
.icon-studiovinari:before {
  content: "";
}
.icon-stumbleupon:before {
  content: "";
}
.icon-stumbleupon-circle:before {
  content: "";
}
.icon-subscript:before {
  content: "";
}
.icon-subway:before {
  content: "";
}
.icon-suitcase:before {
  content: "";
}
.icon-suitcase-rolling:before {
  content: "";
}
.icon-sun:before {
  content: "";
}
.icon-sun-cloud:before {
  content: "";
}
.icon-sun-dust:before {
  content: "";
}
.icon-sun-haze:before {
  content: "";
}
.icon-sunrise:before {
  content: "";
}
.icon-sunset:before {
  content: "";
}
.icon-superpowers:before {
  content: "";
}
.icon-superscript:before {
  content: "";
}
.icon-supple:before {
  content: "";
}
.icon-surprise:before {
  content: "";
}
.icon-suse:before {
  content: "";
}
.icon-swatchbook:before {
  content: "";
}
.icon-swimmer:before {
  content: "";
}
.icon-swimming-pool:before {
  content: "";
}
.icon-sword:before {
  content: "";
}
.icon-swords:before {
  content: "";
}
.icon-synagogue:before {
  content: "";
}
.icon-sync:before {
  content: "";
}
.icon-sync-alt:before {
  content: "";
}
.icon-syringe:before {
  content: "";
}
.icon-table:before {
  content: "";
}
.icon-table-tennis:before {
  content: "";
}
.icon-tablet:before {
  content: "";
}
.icon-tablet-alt:before {
  content: "";
}
.icon-tablet-android:before {
  content: "";
}
.icon-tablet-android-alt:before {
  content: "";
}
.icon-tablet-rugged:before {
  content: "";
}
.icon-tablets:before {
  content: "";
}
.icon-tachometer:before {
  content: "";
}
.icon-tachometer-alt:before {
  content: "";
}
.icon-tachometer-alt-average:before {
  content: "";
}
.icon-tachometer-alt-fast:before {
  content: "";
}
.icon-tachometer-alt-fastest:before {
  content: "";
}
.icon-tachometer-alt-slow:before {
  content: "";
}
.icon-tachometer-alt-slowest:before {
  content: "";
}
.icon-tachometer-average:before {
  content: "";
}
.icon-tachometer-fast:before {
  content: "";
}
.icon-tachometer-fastest:before {
  content: "";
}
.icon-tachometer-slow:before {
  content: "";
}
.icon-tachometer-slowest:before {
  content: "";
}
.icon-tag:before {
  content: "";
}
.icon-tags:before {
  content: "";
}
.icon-tally:before {
  content: "";
}
.icon-tape:before {
  content: "";
}
.icon-tasks:before {
  content: "";
}
.icon-taxi:before {
  content: "";
}
.icon-teamspeak:before {
  content: "";
}
.icon-teeth:before {
  content: "";
}
.icon-teeth-open:before {
  content: "";
}
.icon-telegram:before {
  content: "";
}
.icon-telegram-plane:before {
  content: "";
}
.icon-temperature-frigid:before {
  content: "";
}
.icon-temperature-high:before {
  content: "";
}
.icon-temperature-hot:before {
  content: "";
}
.icon-temperature-low:before {
  content: "";
}
.icon-tencent-weibo:before {
  content: "";
}
.icon-tenge:before {
  content: "";
}
.icon-tennis-ball:before {
  content: "";
}
.icon-terminal:before {
  content: "";
}
.icon-text-height:before {
  content: "";
}
.icon-text-width:before {
  content: "";
}
.icon-th:before {
  content: "";
}
.icon-th-large:before {
  content: "";
}
.icon-th-list:before {
  content: "";
}
.icon-the-red-yeti:before {
  content: "";
}
.icon-theater-masks:before {
  content: "";
}
.icon-themeco:before {
  content: "";
}
.icon-themeisle:before {
  content: "";
}
.icon-thermometer:before {
  content: "";
}
.icon-thermometer-empty:before {
  content: "";
}
.icon-thermometer-full:before {
  content: "";
}
.icon-thermometer-half:before {
  content: "";
}
.icon-thermometer-quarter:before {
  content: "";
}
.icon-thermometer-three-quarters:before {
  content: "";
}
.icon-theta:before {
  content: "";
}
.icon-think-peaks:before {
  content: "";
}
.icon-thumbs-down:before {
  content: "";
}
.icon-thumbs-up:before {
  content: "";
}
.icon-thumbtack:before {
  content: "";
}
.icon-thunderstorm:before {
  content: "";
}
.icon-thunderstorm-moon:before {
  content: "";
}
.icon-thunderstorm-sun:before {
  content: "";
}
.icon-ticket:before {
  content: "";
}
.icon-ticket-alt:before {
  content: "";
}
.icon-tilde:before {
  content: "";
}
.icon-times:before {
  content: "";
}
.icon-times-circle:before {
  content: "";
}
.icon-times-hexagon:before {
  content: "";
}
.icon-times-octagon:before {
  content: "";
}
.icon-times-square:before {
  content: "";
}
.icon-tint:before {
  content: "";
}
.icon-tint-slash:before {
  content: "";
}
.icon-tire:before {
  content: "";
}
.icon-tire-flat:before {
  content: "";
}
.icon-tire-pressure-warning:before {
  content: "";
}
.icon-tire-rugged:before {
  content: "";
}
.icon-tired:before {
  content: "";
}
.icon-toggle-off:before {
  content: "";
}
.icon-toggle-on:before {
  content: "";
}
.icon-toilet:before {
  content: "";
}
.icon-toilet-paper:before {
  content: "";
}
.icon-toilet-paper-alt:before {
  content: "";
}
.icon-tombstone:before {
  content: "";
}
.icon-tombstone-alt:before {
  content: "";
}
.icon-toolbox:before {
  content: "";
}
.icon-tools:before {
  content: "";
}
.icon-tooth:before {
  content: "";
}
.icon-toothbrush:before {
  content: "";
}
.icon-torah:before {
  content: "";
}
.icon-torii-gate:before {
  content: "";
}
.icon-tornado:before {
  content: "";
}
.icon-tractor:before {
  content: "";
}
.icon-trade-federation:before {
  content: "";
}
.icon-trademark:before {
  content: "";
}
.icon-traffic-cone:before {
  content: "";
}
.icon-traffic-light:before {
  content: "";
}
.icon-traffic-light-go:before {
  content: "";
}
.icon-traffic-light-slow:before {
  content: "";
}
.icon-traffic-light-stop:before {
  content: "";
}
.icon-train:before {
  content: "";
}
.icon-tram:before {
  content: "";
}
.icon-transgender:before {
  content: "";
}
.icon-transgender-alt:before {
  content: "";
}
.icon-trash:before {
  content: "";
}
.icon-trash-alt:before {
  content: "";
}
.icon-treasure-chest:before {
  content: "";
}
.icon-tree:before {
  content: "";
}
.icon-tree-alt:before {
  content: "";
}
.icon-tree-christmas:before {
  content: "";
}
.icon-tree-decorated:before {
  content: "";
}
.icon-tree-large:before {
  content: "";
}
.icon-trees:before {
  content: "";
}
.icon-trello:before {
  content: "";
}
.icon-triangle:before {
  content: "";
}
.icon-tripadvisor:before {
  content: "";
}
.icon-trophy:before {
  content: "";
}
.icon-trophy-alt:before {
  content: "";
}
.icon-truck:before {
  content: "";
}
.icon-truck-container:before {
  content: "";
}
.icon-truck-couch:before {
  content: "";
}
.icon-truck-loading:before {
  content: "";
}
.icon-truck-monster:before {
  content: "";
}
.icon-truck-moving:before {
  content: "";
}
.icon-truck-pickup:before {
  content: "";
}
.icon-truck-plow:before {
  content: "";
}
.icon-truck-ramp:before {
  content: "";
}
.icon-tshirt:before {
  content: "";
}
.icon-tty:before {
  content: "";
}
.icon-tumblr:before {
  content: "";
}
.icon-tumblr-square:before {
  content: "";
}
.icon-turkey:before {
  content: "";
}
.icon-turtle:before {
  content: "";
}
.icon-tv:before {
  content: "";
}
.icon-tv-retro:before {
  content: "";
}
.icon-twitch:before {
  content: "";
}
.icon-twitter:before {
  content: "";
}
.icon-twitter-square:before {
  content: "";
}
.icon-typo3:before {
  content: "";
}
.icon-uber:before {
  content: "";
}
.icon-ubuntu:before {
  content: "";
}
.icon-uikit:before {
  content: "";
}
.icon-umbrella:before {
  content: "";
}
.icon-umbrella-beach:before {
  content: "";
}
.icon-underline:before {
  content: "";
}
.icon-undo:before {
  content: "";
}
.icon-undo-alt:before {
  content: "";
}
.icon-unicorn:before {
  content: "";
}
.icon-union:before {
  content: "";
}
.icon-uniregistry:before {
  content: "";
}
.icon-universal-access:before {
  content: "";
}
.icon-university:before {
  content: "";
}
.icon-unlink:before {
  content: "";
}
.icon-unlock:before {
  content: "";
}
.icon-unlock-alt:before {
  content: "";
}
.icon-untappd:before {
  content: "";
}
.icon-upload:before {
  content: "";
}
.icon-ups:before {
  content: "";
}
.icon-usb:before {
  content: "";
}
.icon-usd-circle:before {
  content: "";
}
.icon-usd-square:before {
  content: "";
}
.icon-user:before {
  content: "";
}
.icon-user-alt:before {
  content: "";
}
.icon-user-alt-slash:before {
  content: "";
}
.icon-user-astronaut:before {
  content: "";
}
.icon-user-chart:before {
  content: "";
}
.icon-user-check:before {
  content: "";
}
.icon-user-circle:before {
  content: "";
}
.icon-user-clock:before {
  content: "";
}
.icon-user-cog:before {
  content: "";
}
.icon-user-crown:before {
  content: "";
}
.icon-user-edit:before {
  content: "";
}
.icon-user-friends:before {
  content: "";
}
.icon-user-graduate:before {
  content: "";
}
.icon-user-injured:before {
  content: "";
}
.icon-user-lock:before {
  content: "";
}
.icon-user-md:before {
  content: "";
}
.icon-user-minus:before {
  content: "";
}
.icon-user-ninja:before {
  content: "";
}
.icon-user-plus:before {
  content: "";
}
.icon-user-secret:before {
  content: "";
}
.icon-user-shield:before {
  content: "";
}
.icon-user-slash:before {
  content: "";
}
.icon-user-tag:before {
  content: "";
}
.icon-user-tie:before {
  content: "";
}
.icon-user-times:before {
  content: "";
}
.icon-users:before {
  content: "";
}
.icon-users-class:before {
  content: "";
}
.icon-users-cog:before {
  content: "";
}
.icon-users-crown:before {
  content: "";
}
.icon-usps:before {
  content: "";
}
.icon-ussunnah:before {
  content: "";
}
.icon-utensil-fork:before {
  content: "";
}
.icon-utensil-knife:before {
  content: "";
}
.icon-utensil-spoon:before {
  content: "";
}
.icon-utensils:before {
  content: "";
}
.icon-utensils-alt:before {
  content: "";
}
.icon-vaadin:before {
  content: "";
}
.icon-value-absolute:before {
  content: "";
}
.icon-vector-square:before {
  content: "";
}
.icon-venus:before {
  content: "";
}
.icon-venus-double:before {
  content: "";
}
.icon-venus-mars:before {
  content: "";
}
.icon-viacoin:before {
  content: "";
}
.icon-viadeo:before {
  content: "";
}
.icon-viadeo-square:before {
  content: "";
}
.icon-vial:before {
  content: "";
}
.icon-vials:before {
  content: "";
}
.icon-viber:before {
  content: "";
}
.icon-video:before {
  content: "";
}
.icon-video-plus:before {
  content: "";
}
.icon-video-slash:before {
  content: "";
}
.icon-vihara:before {
  content: "";
}
.icon-vimeo:before {
  content: "";
}
.icon-vimeo-square:before {
  content: "";
}
.icon-vimeo-v:before {
  content: "";
}
.icon-vine:before {
  content: "";
}
.icon-vk:before {
  content: "";
}
.icon-vnv:before {
  content: "";
}
.icon-volcano:before {
  content: "";
}
.icon-volleyball-ball:before {
  content: "";
}
.icon-volume:before {
  content: "";
}
.icon-volume-down:before {
  content: "";
}
.icon-volume-mute:before {
  content: "";
}
.icon-volume-off:before {
  content: "";
}
.icon-volume-slash:before {
  content: "";
}
.icon-volume-up:before {
  content: "";
}
.icon-vote-nay:before {
  content: "";
}
.icon-vote-yea:before {
  content: "";
}
.icon-vr-cardboard:before {
  content: "";
}
.icon-vuejs:before {
  content: "";
}
.icon-walking:before {
  content: "";
}
.icon-wallet:before {
  content: "";
}
.icon-wand:before {
  content: "";
}
.icon-wand-magic:before {
  content: "";
}
.icon-warehouse:before {
  content: "";
}
.icon-warehouse-alt:before {
  content: "";
}
.icon-watch:before {
  content: "";
}
.icon-watch-fitness:before {
  content: "";
}
.icon-water:before {
  content: "";
}
.icon-water-lower:before {
  content: "";
}
.icon-water-rise:before {
  content: "";
}
.icon-weebly:before {
  content: "";
}
.icon-weibo:before {
  content: "";
}
.icon-weight:before {
  content: "";
}
.icon-weight-hanging:before {
  content: "";
}
.icon-weixin:before {
  content: "";
}
.icon-whale:before {
  content: "";
}
.icon-whatsapp:before {
  content: "";
}
.icon-whatsapp-square:before {
  content: "";
}
.icon-wheat:before {
  content: "";
}
.icon-wheelchair:before {
  content: "";
}
.icon-whistle:before {
  content: "";
}
.icon-whmcs:before {
  content: "";
}
.icon-wifi:before {
  content: "";
}
.icon-wifi-1:before {
  content: "";
}
.icon-wifi-2:before {
  content: "";
}
.icon-wifi-slash:before {
  content: "";
}
.icon-wikipedia-w:before {
  content: "";
}
.icon-wind:before {
  content: "";
}
.icon-wind-warning:before {
  content: "";
}
.icon-window:before {
  content: "";
}
.icon-window-alt:before {
  content: "";
}
.icon-window-close:before {
  content: "";
}
.icon-window-maximize:before {
  content: "";
}
.icon-window-minimize:before {
  content: "";
}
.icon-window-restore:before {
  content: "";
}
.icon-windows:before {
  content: "";
}
.icon-windsock:before {
  content: "";
}
.icon-wine-bottle:before {
  content: "";
}
.icon-wine-glass:before {
  content: "";
}
.icon-wine-glass-alt:before {
  content: "";
}
.icon-wix:before {
  content: "";
}
.icon-wizards-of-the-coast:before {
  content: "";
}
.icon-wolf-pack-battalion:before {
  content: "";
}
.icon-won-sign:before {
  content: "";
}
.icon-wordpress:before {
  content: "";
}
.icon-wordpress-simple:before {
  content: "";
}
.icon-wpbeginner:before {
  content: "";
}
.icon-wpexplorer:before {
  content: "";
}
.icon-wpforms:before {
  content: "";
}
.icon-wpressr:before {
  content: "";
}
.icon-wreath:before {
  content: "";
}
.icon-wrench:before {
  content: "";
}
.icon-x-ray:before {
  content: "";
}
.icon-xbox:before {
  content: "";
}
.icon-xing:before {
  content: "";
}
.icon-xing-square:before {
  content: "";
}
.icon-y-combinator:before {
  content: "";
}
.icon-yahoo:before {
  content: "";
}
.icon-yandex:before {
  content: "";
}
.icon-yandex-international:before {
  content: "";
}
.icon-yarn:before {
  content: "";
}
.icon-yelp:before {
  content: "";
}
.icon-yen-sign:before {
  content: "";
}
.icon-yin-yang:before {
  content: "";
}
.icon-yoast:before {
  content: "";
}
.icon-youtube:before {
  content: "";
}
.icon-youtube-square:before {
  content: "";
}
.icon-zhihu:before {
  content: "";
}


`;
