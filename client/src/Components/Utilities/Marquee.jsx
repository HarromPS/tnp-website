import Ticker from "react-ticker";

export const Marquee = ({children}) => {
  return (
    // wrap it to controll css better
    <div>
      <Ticker offset={80}>
        { () =>
          <div >
            {children}
          </div>
        }
      </Ticker>
    </div>
  );
}

/*
use it anywhere you need like this:

<Marquee>
  {this.state.items.map(function (item, key) {
    return (
      <div className={styles.rowStyle} key={key}>
        <div className={styles.CellStyle}>{item.Title}</div>
      </div>
    );
  })}
</Marquee>;
*/